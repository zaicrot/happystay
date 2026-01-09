import { useState, useEffect } from "react";
import { ListingForm } from "@/types/dashboard";
import backendService from "@/services/backend";

export const useListingManagement = (initialListings: ListingForm[]) => {
  const [listings, setListings] = useState<ListingForm[]>(initialListings);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch listings on mount
  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      setLoading(true);
      const data = await backendService.getProperties({ per_page: 50 });
      const properties = Array.isArray(data) ? data : (data.data || []);
      setListings(properties.map(mapPropertyToFrontend));
      setError(null);
    } catch (err: any) {
      console.error("Failed to fetch listings", err);
      setError(err.message || "Error al cargar propiedades");
    } finally {
      setLoading(false);
    }
  };

  /* 
   * Updates an existing listing.
   * Now supporting partial updates or full object replacements.
   */
  const updateListing = async (
    id: number,
    data: Partial<ListingForm>
  ) => {
    try {
      // Optimistic update
      setListings((prev) =>
        prev.map((item) => (item.id === id ? { ...item, ...data } : item))
      );

      // Call API
      const payload: any = { ...data };
      if (data.airbnbUrl !== undefined) payload['airbnb_url'] = data.airbnbUrl;

      await backendService.updateProperty(id, payload);
    } catch (err) {
      console.error("Update failed", err);
      // Ideally revert here
    }
  };

  const addListing = async () => {
    try {
      const newProperty = {
        name: "Nuevo alojamiento",
        location: "Ubicación pendiente",
        price: 0,
        period: "noche",
        guests: 1,
        bedrooms: 1,
        bathrooms: 1,
        amenities: [],
        images: [],
        featured: false
      };

      const created = await backendService.createProperty(newProperty);
      setListings((prev) => [...prev, mapPropertyToFrontend(created)]);
    } catch (err) {
      console.error("Failed to create property", err);
    }
  };

  const removeListing = async (id: number) => {
    try {
      setListings((prev) => prev.filter((item) => item.id !== id));
      await backendService.deleteProperty(id);
    } catch (err) {
      console.error("Failed to delete property", err);
      fetchListings();
    }
  };

  // Improved image upload that returns the new image objects
  const uploadImages = async (files: FileList | null): Promise<any[]> => {
    if (!files || !files.length) return [];
    try {
      const fileArray = Array.from(files);
      const uploadResponse = await backendService.uploadImages(fileArray);
      // Return formatted images for the frontend to use
      return uploadResponse.images.map((img: any, i: number) => ({
        id: `new-${Date.now()}-${i}`,
        url: img.url,
        preview: img.url
      }));
    } catch (err) {
      console.error("Failed to upload images", err);
      throw err;
    }
  };

  // We keep these for compatibility 
  const addImagesToListing = async (id: number, files: FileList | null) => {
    if (!files) return;

    try {
      const newImages = await uploadImages(files);

      const currentListing = listings.find(l => l.id === id);
      if (!currentListing) return;

      const updatedImages = [...currentListing.images, ...newImages];
      // Optimistic
      setListings((prev) =>
        prev.map((item) => (item.id === id ? { ...item, images: updatedImages } : item))
      );

      // Use simpler payload for backend
      const imageUrls = updatedImages.map((img: any) => img.url || img.preview);
      await backendService.updateProperty(id, { images: imageUrls });
    } catch (err) {
      console.error("Failed to add images", err);
    }
  };

  const removeImage = async (listingId: number, imageId: string) => {
    const currentListing = listings.find(l => l.id === listingId);
    if (!currentListing) return;

    const newImages = currentListing.images.filter((img) => img.id !== imageId);

    // Optimistic
    setListings((prev) =>
      prev.map((item) => (item.id === listingId ? { ...item, images: newImages } : item))
    );

    const imageUrls = newImages.map((img: any) => img.url || img.preview);
    await backendService.updateProperty(listingId, { images: imageUrls });
  };

  return {
    listings,
    loading,
    error,
    updateListing,
    addListing,
    removeListing,
    addImagesToListing,
    uploadImages,
    removeImage,
  };
};

const mapPropertyToFrontend = (p: any): ListingForm => ({
  id: p.id,
  name: p.name,
  location: p.location,
  price: p.price,
  period: p.period || 'noche',
  guests: p.guests,
  bedrooms: p.bedrooms,
  bathrooms: p.bathrooms,
  description: p.description || '',
  featured: Boolean(p.featured),
  amenities: (p.amenities || []).map((a: any) => ({
    ...a,
    id: a.id || crypto.randomUUID()
  })),
  images: (p.images || []).map((img: string | any, i: number) => {
    const url = typeof img === 'string' ? img : img.url;
    return {
      id: `img-${p.id}-${i}`,
      url: url,
      preview: url
    };
  }),
  airbnbUrl: p.airbnb_url || '',
  slug: ''
});
