import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2 } from "lucide-react";
import { ListingForm } from "@/types/dashboard";

interface BasicInfoSectionProps {
  listing: ListingForm;
  onUpdate: (
    id: number,
    field: keyof ListingForm,
    value: string | number | boolean
  ) => void;
}

export const BasicInfoSection = ({
  listing,
  onUpdate,
}: BasicInfoSectionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-foreground uppercase text-sm tracking-wide">
        Información básica
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Nombre del alojamiento
          </label>
          <Input
            value={listing.name}
            onChange={(e) => onUpdate(listing.id, "name", e.target.value)}
            placeholder="ej: Costa Peruana 2182"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Precio</label>
          <Input
            value={listing.price}
            onChange={(e) => onUpdate(listing.id, "price", e.target.value)}
            placeholder="ej: Desde S/. 850"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Ubicación</label>
        <Input
          value={listing.location}
          onChange={(e) => onUpdate(listing.id, "location", e.target.value)}
          placeholder="ej: Playa Señoritas · Punta Hermosa"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          URL de Airbnb
        </label>
        <Input
          value={listing.airbnbUrl}
          onChange={(e) => onUpdate(listing.id, "airbnbUrl", e.target.value)}
          placeholder="https://airbnb.com/..."
          className="font-mono text-xs"
        />
      </div>
    </div>
  );
};
