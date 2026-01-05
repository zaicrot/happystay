import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2 } from "lucide-react";
import { ListingForm, Amenity } from "@/types/dashboard";
import { AMENITY_ICONS } from "@/constants/amenityIcons";

interface AmenitiesSectionProps {
  listing: ListingForm;
  onAddAmenity: (listingId: number) => void;
  onRemoveAmenity: (listingId: number, amenityId: string) => void;
  onUpdateAmenity: (
    listingId: number,
    amenityId: string,
    field: "icon" | "label",
    value: string
  ) => void;
}

export const AmenitiesSection = ({
  listing,
  onAddAmenity,
  onRemoveAmenity,
  onUpdateAmenity,
}: AmenitiesSectionProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-foreground uppercase text-sm tracking-wide">
          Servicios y amenidades
        </h3>
        <Button
          size="sm"
          variant="outline"
          className="gap-2"
          onClick={() => onAddAmenity(listing.id)}
        >
          <Plus className="w-4 h-4" />
          Agregar servicio
        </Button>
      </div>

      {listing.amenities.length === 0 ? (
        <div className="text-center py-8 border border-dashed border-border/40 rounded-lg">
          <p className="text-sm text-muted-foreground">No hay servicios aún</p>
          <Button
            size="sm"
            variant="ghost"
            className="mt-2 gap-2"
            onClick={() => onAddAmenity(listing.id)}
          >
            <Plus className="w-4 h-4" />
            Crear el primero
          </Button>
        </div>
      ) : (
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {listing.amenities.map((amenity) => (
            <AmenityItem
              key={amenity.id}
              amenity={amenity}
              listingId={listing.id}
              onUpdate={onUpdateAmenity}
              onRemove={onRemoveAmenity}
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface AmenityItemProps {
  amenity: Amenity;
  listingId: number;
  onUpdate: (
    listingId: number,
    amenityId: string,
    field: "icon" | "label",
    value: string
  ) => void;
  onRemove: (listingId: number, amenityId: string) => void;
}

const AmenityItem = ({
  amenity,
  listingId,
  onUpdate,
  onRemove,
}: AmenityItemProps) => {
  return (
    <div className="flex gap-2 items-end p-3 bg-card border border-border/40 rounded-lg">
      <div className="flex-1 grid grid-cols-2 gap-2">
        <div className="space-y-1">
          <label className="text-xs font-medium text-muted-foreground">
            Icono
          </label>
          <div className="relative">
            <select
              value={amenity.icon}
              onChange={(e) =>
                onUpdate(listingId, amenity.id, "icon", e.target.value)
              }
              className="w-full px-3 py-2 rounded-md border border-border/60 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ocean/50 appearance-none"
            >
              <option value="">Seleccionar icono</option>
              {Object.entries(AMENITY_ICONS).map(([key, { label }]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
            {amenity.icon &&
              AMENITY_ICONS[amenity.icon as keyof typeof AMENITY_ICONS] && (
                <div className="absolute right-3 top-2 pointer-events-none">
                  {(() => {
                    const IconComponent =
                      AMENITY_ICONS[amenity.icon as keyof typeof AMENITY_ICONS]
                        ?.icon;
                    return IconComponent ? (
                      <IconComponent className="w-5 h-5 text-ocean" />
                    ) : null;
                  })()}
                </div>
              )}
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-muted-foreground">
            Descripción
          </label>
          <Input
            value={amenity.label}
            onChange={(e) =>
              onUpdate(listingId, amenity.id, "label", e.target.value)
            }
            placeholder="Aire acondicionado"
            className="text-xs"
          />
        </div>
      </div>
      <Button
        size="sm"
        variant="ghost"
        className="text-destructive hover:text-destructive hover:bg-destructive/10"
        onClick={() => onRemove(listingId, amenity.id)}
      >
        <Trash2 className="w-4 h-4" />
      </Button>
    </div>
  );
};
