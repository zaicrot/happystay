import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ListingForm } from "@/types/dashboard";

interface ListingsHeaderProps {
  listingCount: number;
  onAddListing: () => void;
}

export const ListingsHeader = ({
  listingCount,
  onAddListing,
}: ListingsHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gradient-to-r from-ocean/5 to-seafoam/5 border border-ocean/10 rounded-2xl p-6">
      <div>
        <h2 className="text-2xl font-display font-bold text-foreground">
          Alojamientos
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          {listingCount} propiedad{listingCount !== 1 ? "es" : ""}
        </p>
      </div>
      <Button
        size="lg"
        className="bg-ocean hover:bg-ocean-dark gap-2 whitespace-nowrap"
        onClick={onAddListing}
      >
        <Plus className="w-4 h-4" />
        Nuevo alojamiento
      </Button>
    </div>
  );
};
