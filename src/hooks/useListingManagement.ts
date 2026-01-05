import { useState, useMemo } from "react";
import { ListingForm, UploadedImage } from "@/types/dashboard";

export const useListingManagement = (initialListings: ListingForm[]) => {
  const [listings, setListings] = useState<ListingForm[]>(initialListings);

  const nextListingId = useMemo(
    () => (listings.length ? Math.max(...listings.map((l) => l.id)) + 1 : 1),
    [listings]
  );

  const updateListing = (
    id: number,
    field: keyof ListingForm,
    value: string | number | boolean
  ) => {
    setListings((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const addListing = () => {
    setListings((prev) => [
      ...prev,
      {
        id: nextListingId,
        name: "Nuevo alojamiento",
        location: "",
        price: "",
        slug: "",
        guests: 4,
        bedrooms: 2,
        bathrooms: 1,
        airbnbUrl: "",
        featured: false,
        amenities: [],
        images: [],
      },
    ]);
  };

  const removeListing = (id: number) => {
    setListings((prev) => prev.filter((item) => item.id !== id));
  };

  const addImagesToListing = (id: number, files: FileList | null) => {
    if (!files || !files.length) return;
    const newImages: UploadedImage[] = Array.from(files).map((file) => ({
      id: crypto.randomUUID(),
      name: file.name,
      preview: URL.createObjectURL(file),
    }));

    setListings((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, images: [...item.images, ...newImages] }
          : item
      )
    );
  };

  const removeImage = (listingId: number, imageId: string) => {
    setListings((prev) =>
      prev.map((item) =>
        item.id === listingId
          ? { ...item, images: item.images.filter((img) => img.id !== imageId) }
          : item
      )
    );
  };

  const addAmenity = (listingId: number) => {
    setListings((prev) =>
      prev.map((item) =>
        item.id === listingId
          ? {
              ...item,
              amenities: [
                ...item.amenities,
                {
                  id: crypto.randomUUID(),
                  icon: "star",
                  label: "Nuevo servicio",
                },
              ],
            }
          : item
      )
    );
  };

  const removeAmenity = (listingId: number, amenityId: string) => {
    setListings((prev) =>
      prev.map((item) =>
        item.id === listingId
          ? {
              ...item,
              amenities: item.amenities.filter((a) => a.id !== amenityId),
            }
          : item
      )
    );
  };

  const updateAmenity = (
    listingId: number,
    amenityId: string,
    field: "icon" | "label",
    value: string
  ) => {
    setListings((prev) =>
      prev.map((item) =>
        item.id === listingId
          ? {
              ...item,
              amenities: item.amenities.map((a) =>
                a.id === amenityId ? { ...a, [field]: value } : a
              ),
            }
          : item
      )
    );
  };

  return {
    listings,
    nextListingId,
    updateListing,
    addListing,
    removeListing,
    addImagesToListing,
    removeImage,
    addAmenity,
    removeAmenity,
    updateAmenity,
  };
};
