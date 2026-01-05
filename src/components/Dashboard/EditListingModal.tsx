import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ListingForm } from "@/types/dashboard";
import { BasicInfoSection } from "./BasicInfoSection";
import { CapacitySection } from "./CapacitySection";
import { AmenitiesSection } from "./AmenitiesSection";
import { GallerySection } from "./GallerySection";

interface EditListingModalProps {
  listing: ListingForm | null;
  isOpen: boolean;
  onClose: () => void;
  onUpdateListing: (
    id: number,
    field: keyof ListingForm,
    value: string | number | boolean
  ) => void;
  onAddAmenity: (listingId: number) => void;
  onRemoveAmenity: (listingId: number, amenityId: string) => void;
  onUpdateAmenity: (
    listingId: number,
    amenityId: string,
    field: "icon" | "label",
    value: string
  ) => void;
  onAddImages: (id: number, files: FileList | null) => void;
  onRemoveImage: (listingId: number, imageId: string) => void;
}

export const EditListingModal = ({
  listing,
  isOpen,
  onClose,
  onUpdateListing,
  onAddAmenity,
  onRemoveAmenity,
  onUpdateAmenity,
  onAddImages,
  onRemoveImage,
}: EditListingModalProps) => {
  if (!listing) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="border-b border-border/40 pb-4">
          <DialogTitle className="text-2xl font-display font-bold">
            Editar: {listing.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-6">
          <BasicInfoSection listing={listing} onUpdate={onUpdateListing} />
          <Separator />

          <CapacitySection listing={listing} onUpdate={onUpdateListing} />
          <Separator />

          <AmenitiesSection
            listing={listing}
            onAddAmenity={onAddAmenity}
            onRemoveAmenity={onRemoveAmenity}
            onUpdateAmenity={onUpdateAmenity}
          />
          <Separator />

          <GallerySection
            listing={listing}
            onAddImages={onAddImages}
            onRemoveImage={onRemoveImage}
          />
          <Separator />

          <div className="flex items-center justify-between pt-2">
            <Badge variant="secondary" className="text-xs">
              ID #{listing.id}
            </Badge>
            <div className="flex gap-2">
              <Button variant="outline" onClick={onClose} className="gap-2">
                Cancelar
              </Button>
              <Button
                className="bg-ocean hover:bg-ocean-dark gap-2"
                onClick={onClose}
              >
                Listo
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
