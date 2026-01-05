import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface TestimonialsHeaderProps {
  onAddTestimonial: () => void;
}

export const TestimonialsHeader = ({
  onAddTestimonial,
}: TestimonialsHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gradient-to-r from-seafoam/5 to-ocean/5 border border-seafoam/10 rounded-2xl p-6">
      <div>
        <h2 className="text-2xl font-display font-bold text-foreground">
          Testimonios
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Gestiona reseñas y comentarios de huéspedes
        </p>
      </div>
      <Button
        size="lg"
        className="bg-seafoam hover:bg-seafoam/90 gap-2 whitespace-nowrap"
        onClick={onAddTestimonial}
      >
        <Plus className="w-4 h-4" />
        Nuevo testimonio
      </Button>
    </div>
  );
};
