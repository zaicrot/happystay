import { Input } from "@/components/ui/input";
import { ListingForm } from "@/types/dashboard";

interface CapacitySectionProps {
  listing: ListingForm;
  onUpdate: (
    id: number,
    field: keyof ListingForm,
    value: string | number | boolean
  ) => void;
}

export const CapacitySection = ({
  listing,
  onUpdate,
}: CapacitySectionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-foreground uppercase text-sm tracking-wide">
        Capacidad y características
      </h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Huéspedes
          </label>
          <Input
            type="number"
            min="1"
            value={listing.guests}
            onChange={(e) =>
              onUpdate(listing.id, "guests", parseInt(e.target.value) || 1)
            }
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Habitaciones
          </label>
          <Input
            type="number"
            min="1"
            value={listing.bedrooms}
            onChange={(e) =>
              onUpdate(listing.id, "bedrooms", parseInt(e.target.value) || 1)
            }
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Baños</label>
          <Input
            type="number"
            min="1"
            value={listing.bathrooms}
            onChange={(e) =>
              onUpdate(listing.id, "bathrooms", parseInt(e.target.value) || 1)
            }
          />
        </div>
      </div>
      <div className="flex items-center gap-3 pt-2">
        <input
          type="checkbox"
          id="featured"
          checked={listing.featured}
          onChange={(e) => onUpdate(listing.id, "featured", e.target.checked)}
          className="w-4 h-4 text-ocean border-border rounded focus:ring-ocean"
        />
        <label
          htmlFor="featured"
          className="text-sm font-medium text-foreground cursor-pointer"
        >
          Marcar como destacado
        </label>
      </div>
    </div>
  );
};
