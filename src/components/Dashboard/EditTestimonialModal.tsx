import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TestimonialForm } from "@/types/dashboard";
import { useState, useEffect } from "react";

interface EditTestimonialModalProps {
  testimonial: TestimonialForm | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (testimonial: TestimonialForm) => Promise<void>;
}

export const EditTestimonialModal = ({
  testimonial,
  isOpen,
  onClose,
  onSave,
}: EditTestimonialModalProps) => {
  const [formData, setFormData] = useState<TestimonialForm | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (testimonial) {
        setFormData(testimonial);
      } else {
        // Crear nuevo testimonial vacío
        setFormData({
          id: 0,
          name: "",
          location: "",
          text: "",
          rating: 5,
          avatar: "",
          is_active: true,
          type: "Familia",
        });
      }
    }
  }, [testimonial, isOpen]);

  const handleSave = async () => {
    if (!formData) return;

    try {
      setIsSaving(true);
      await onSave(formData);
      onClose();
      setFormData(null);
    } catch (err) {
      console.error("Error saving testimonial:", err);
    } finally {
      setIsSaving(false);
    }
  };

  if (!formData || !isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            {formData.id ? "Editar testimonio" : "Nuevo testimonio"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Nombre</label>
              <Input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Nombre del cliente"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Avatar (1-2 letras)</label>
              <Input
                value={formData.avatar}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    avatar: e.target.value.slice(0, 2).toUpperCase(),
                  })
                }
                placeholder="ej: DB"
                maxLength={2}
                className="uppercase"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Ubicación</label>
            <Input
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              placeholder="ej: Familia · Punta Hermosa"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Calificación</label>
            <select
              value={formData.rating}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  rating: parseInt(e.target.value),
                })
              }
              className="w-full px-3 py-2 rounded-md border border-border/60 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ocean/50"
            >
              <option value={1}>1 ⭐</option>
              <option value={2}>2 ⭐⭐</option>
              <option value={3}>3 ⭐⭐⭐</option>
              <option value={4}>4 ⭐⭐⭐⭐</option>
              <option value={5}>5 ⭐⭐⭐⭐⭐</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Testimonio</label>
            <Textarea
              value={formData.text}
              onChange={(e) =>
                setFormData({ ...formData, text: e.target.value })
              }
              placeholder="Escribe el testimonio aquí..."
              rows={5}
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="is_active"
              checked={formData.is_active ?? true}
              onChange={(e) =>
                setFormData({ ...formData, is_active: e.target.checked })
              }
              className="w-4 h-4"
            />
            <label
              htmlFor="is_active"
              className="text-sm text-muted-foreground cursor-pointer"
            >
              Visible en el sitio
            </label>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button
            onClick={handleSave}
            disabled={isSaving}
            className="bg-seafoam hover:bg-seafoam/90"
          >
            {isSaving ? "Guardando..." : "Guardar"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
