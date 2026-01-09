import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ListingForm, Amenity, UploadedImage } from "@/types/dashboard";
import { BasicInfoSection } from "./BasicInfoSection";
import { CapacitySection } from "./CapacitySection";
import { AmenitiesSection } from "./AmenitiesSection";
import { GallerySection } from "./GallerySection";
import { toast } from "sonner";

interface EditListingModalProps {
  listing: ListingForm | null;
  isOpen: boolean;
  onClose: () => void;
  onUpdateListing: (id: number, data: Partial<ListingForm>) => Promise<void>;
  uploadImages: (files: FileList | null) => Promise<any[]>;
  onRemoveImage: (listingId: number, imageId: string) => Promise<void>;
}

export const EditListingModal = ({
  listing,
  isOpen,
  onClose,
  onUpdateListing,
  uploadImages,
  onRemoveImage,
}: EditListingModalProps) => {
  const [localListing, setLocalListing] = useState<ListingForm | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  // Sync local state when listing prop changes or modal opens
  useEffect(() => {
    if (listing) {
      setLocalListing({ ...listing });
    }
  }, [listing, isOpen]);

  if (!listing || !localListing) return null;

  // Generic handler for field updates (local only)
  const handleLocalUpdate = (
    id: number, // Unused in local context since we know we're editing 'localListing'
    field: keyof ListingForm,
    value: string | number | boolean
  ) => {
    setLocalListing((prev) => (prev ? { ...prev, [field]: value } : null));
  };

  // Amenities handlers (local only)
  const handleAddAmenity = () => {
    setLocalListing((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        amenities: [
          ...prev.amenities,
          { id: crypto.randomUUID(), icon: "star", label: "Nuevo servicio" },
        ],
      };
    });
  };

  const handleRemoveAmenity = (listingId: number, amenityId: string) => {
    setLocalListing((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        amenities: prev.amenities.filter((a) => a.id !== amenityId),
      };
    });
  };

  const handleUpdateAmenity = (
    listingId: number,
    amenityId: string,
    field: "icon" | "label",
    value: string
  ) => {
    setLocalListing((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        amenities: prev.amenities.map((a) =>
          a.id === amenityId ? { ...a, [field]: value } : a
        ),
      };
    });
  };

  // Image handlers
  const handleAddImages = async (id: number, files: FileList | null) => {
    if (!files || files.length === 0) return;

    setIsUploading(true);
    try {
      const newImages = await uploadImages(files);
      // Update local state with new images
      setLocalListing(prev => {
        if (!prev) return null;
        // We need to format them as UploadedImage
        // The hook returns { id, url, preview } which matches UploadedImage
        return {
          ...prev,
          images: [...prev.images, ...newImages]
        };
      });
      toast.success("Imágenes subidas correctamente");
    } catch (error) {
      console.error(error);
      toast.error("Error al subir imágenes");
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveImageLocal = (listingId: number, imageId: string) => {
    // For images, since they are uploaded immediately, we might want to delete them immediately?
    // OR we just remove from the list and save at the end. 
    // Existing hook `onRemoveImage` does immediate delete. 
    // Let's keep using the prop for immediate delete to ensure backend sync?
    // But user complained about too many requests.
    // Ideally we mark for deletion. 
    // For now, let's just update local state and let 'Save' handle the final list?
    // BUT `onUpdateListing` usually takes a full image list.

    setLocalListing(prev => {
      if (!prev) return null;
      return {
        ...prev,
        images: prev.images.filter(img => img.id !== imageId)
      };
    });
  };

  const handleSave = async () => {
    if (!localListing) return;
    setIsSaving(true);
    try {
      // We send the entire relevant state, or just what changed.
      // Sending everything is safer for sync.
      // Note: Images are already on backend (urls), we just send the list of URLs.
      // But `onUpdateListing` in hook handles keys mapping? 
      // Actually hook expects `Partial<ListingForm>`.

      await onUpdateListing(listing.id, localListing);
      toast.success("Cambios guardados");
      onClose();
    } catch (error) {
      toast.error("Error al guardar cambios");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="border-b border-border/40 pb-4">
          <DialogTitle className="text-2xl font-display font-bold">
            Editar: {localListing.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-6">
          <BasicInfoSection listing={localListing} onUpdate={handleLocalUpdate} />
          <Separator />

          <CapacitySection listing={localListing} onUpdate={handleLocalUpdate} />
          <Separator />

          <AmenitiesSection
            listing={localListing}
            onAddAmenity={handleAddAmenity}
            onRemoveAmenity={handleRemoveAmenity}
            onUpdateAmenity={handleUpdateAmenity}
          />
          <Separator />

          <GallerySection
            listing={localListing}
            onAddImages={handleAddImages}
            onRemoveImage={(id, imgId) => Promise.resolve(handleRemoveImageLocal(id, imgId))}
          />
          {isUploading && <p className="text-sm text-blue-500 animate-pulse">Subiendo imágenes...</p>}

          <Separator />

          <div className="flex items-center justify-between pt-2">
            <Badge variant="secondary" className="text-xs">
              ID #{localListing.id}
            </Badge>
            <div className="flex gap-2">
              <Button variant="outline" onClick={onClose} className="gap-2" disabled={isSaving || isUploading}>
                Cancelar
              </Button>
              <Button
                className="bg-ocean hover:bg-ocean-dark gap-2"
                onClick={handleSave}
                disabled={isSaving || isUploading}
              >
                {isSaving ? "Guardando..." : "Listo"}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
