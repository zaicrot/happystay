import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface ListingsEmptyProps {
  onCreateListing: () => void;
}

export const ListingsEmpty = ({ onCreateListing }: ListingsEmptyProps) => {
  return (
    <Card className="border border-dashed border-border/40 bg-card/50">
      <CardContent className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-muted-foreground mb-4">No hay alojamientos aún</p>
        <Button
          className="gap-2 bg-ocean hover:bg-ocean-dark"
          onClick={onCreateListing}
        >
          <Plus className="w-4 h-4" />
          Crear el primero
        </Button>
      </CardContent>
    </Card>
  );
};
