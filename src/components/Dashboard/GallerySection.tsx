import { Input } from "@/components/ui/input";
import { Upload, Trash2 } from "lucide-react";
import { ListingForm, UploadedImage } from "@/types/dashboard";

interface GallerySectionProps {
  listing: ListingForm;
  onAddImages: (id: number, files: FileList | null) => void;
  onRemoveImage: (listingId: number, imageId: string) => void;
}

export const GallerySection = ({
  listing,
  onAddImages,
  onRemoveImage,
}: GallerySectionProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-foreground uppercase text-sm tracking-wide">
        Galería de imágenes
      </h3>

      <label className="flex flex-col items-center justify-center w-full py-8 border-2 border-dashed border-ocean/30 rounded-xl cursor-pointer hover:border-ocean/60 bg-ocean/5 hover:bg-ocean/10 transition gap-3">
        <div className="flex flex-col items-center justify-center">
          <Upload className="w-8 h-8 text-ocean mb-2" />
          <p className="font-medium text-foreground text-sm">
            Sube tus imágenes aquí
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            o arrastra archivos
          </p>
        </div>
        <Input
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={(e) => onAddImages(listing.id, e.target.files)}
        />
      </label>

      {listing.images.length > 0 ? (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            {listing.images.length} imagen
            {listing.images.length !== 1 ? "es" : ""} cargada
            {listing.images.length !== 1 ? "s" : ""}
          </p>
          <div className="grid grid-cols-4 gap-3">
            {listing.images.map((img) => (
              <ImagePreview
                key={img.id}
                image={img}
                listingId={listing.id}
                onRemove={onRemoveImage}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-sm text-muted-foreground">No hay imágenes aún</p>
          <p className="text-xs text-muted-foreground mt-1">
            Carga imágenes para que aparezcan en la galería
          </p>
        </div>
      )}
    </div>
  );
};

interface ImagePreviewProps {
  image: UploadedImage;
  listingId: number;
  onRemove: (listingId: number, imageId: string) => void;
}

const ImagePreview = ({ image, listingId, onRemove }: ImagePreviewProps) => {
  return (
    <div className="relative group rounded-lg overflow-hidden">
      <img
        src={image.preview}
        alt={image.name}
        className="h-24 w-full object-cover border border-border/40 group-hover:border-ocean/60 transition"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
        <button
          className="bg-destructive text-white rounded-full p-2 hover:bg-destructive/90 transition"
          onClick={() => onRemove(listingId, image.id)}
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
      <p className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-[10px] p-1 truncate">
        {image.name}
      </p>
    </div>
  );
};
