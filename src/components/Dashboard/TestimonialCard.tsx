import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Trash2 } from "lucide-react";
import { TestimonialForm } from "@/types/dashboard";

interface TestimonialCardProps {
  testimonial: TestimonialForm;
  onUpdate: (id: number, field: keyof TestimonialForm, value: string) => void;
  onDelete: (id: number) => void;
}

export const TestimonialCard = ({
  testimonial,
  onUpdate,
  onDelete,
}: TestimonialCardProps) => {
  return (
    <Card className="border border-border/40 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="bg-gradient-to-r from-seafoam/5 to-ocean/5 border-b border-border/40 flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="text-base text-foreground">
            {testimonial.name}
          </CardTitle>
          <Badge className="mt-2 bg-seafoam/20 text-seafoam border-0 text-xs">
            {testimonial.type}
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-destructive hover:text-destructive hover:bg-destructive/10"
          onClick={() => onDelete(testimonial.id)}
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
            Nombre
          </label>
          <Input
            value={testimonial.name}
            onChange={(e) => onUpdate(testimonial.id, "name", e.target.value)}
            className="text-sm"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
            Tipo
          </label>
          <select
            value={testimonial.type}
            onChange={(e) =>
              onUpdate(
                testimonial.id,
                "type",
                e.target.value as TestimonialForm["type"]
              )
            }
            className="w-full px-3 py-2 rounded-md border border-border/60 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ocean/50"
          >
            <option value="Familia">Familia</option>
            <option value="Pareja">Pareja</option>
            <option value="Amigos">Amigos</option>
            <option value="Estadia">Estadía larga</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
            Texto
          </label>
          <Textarea
            rows={4}
            value={testimonial.text}
            onChange={(e) => onUpdate(testimonial.id, "text", e.target.value)}
            className="text-sm resize-none"
          />
        </div>
        <p className="text-[10px] text-muted-foreground italic">
          Datos guardados localmente.
        </p>
      </CardContent>
    </Card>
  );
};
