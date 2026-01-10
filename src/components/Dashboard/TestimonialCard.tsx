import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Edit2 } from "lucide-react";
import { TestimonialForm } from "@/types/dashboard";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  testimonial: TestimonialForm;
  onUpdate: (
    id: number,
    field: keyof TestimonialForm,
    value: string | number | boolean
  ) => void;
  onDelete: (id: number) => void;
  onEdit?: (id: number) => void;
}

export const TestimonialCard = ({
  testimonial,
  onUpdate,
  onDelete,
  onEdit,
}: TestimonialCardProps) => {
  return (
    <Card className="border border-border/40 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="bg-gradient-to-r from-seafoam/5 to-ocean/5 border-b border-border/40 flex flex-row items-center justify-between space-y-0 pb-4">
        <div className="flex items-center gap-4">
          {/* Avatar - 1-2 letras */}
          <div className="w-10 h-10 rounded-full bg-ocean-light text-ocean font-display font-bold flex items-center justify-center text-sm">
            {testimonial.avatar?.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <CardTitle className="text-base text-foreground">
              {testimonial.name}
            </CardTitle>
            <p className="text-xs text-muted-foreground mt-1">
              {testimonial.location}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-ocean hover:text-ocean hover:bg-ocean/10"
            onClick={() => onEdit?.(testimonial.id)}
          >
            <Edit2 className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
            onClick={() => onDelete(testimonial.id)}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        <div className="flex gap-1 mb-2">
          {[...Array(testimonial.rating || 5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-ocean fill-ocean" />
          ))}
        </div>
        <p className="text-sm text-foreground leading-relaxed">
          "{testimonial.text}"
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-border/40">
          <span className="text-xs text-muted-foreground">
            {testimonial.is_active ? "✓ Visible" : "✗ Oculto"}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
