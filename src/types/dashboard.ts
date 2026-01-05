export type UploadedImage = {
  id: string;
  name: string;
  preview: string;
};

export type Amenity = {
  id: string;
  icon: string;
  label: string;
};

export interface ListingForm {
  id: number;
  name: string;
  location: string;
  price: string;
  slug: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  airbnbUrl: string;
  featured: boolean;
  amenities: Amenity[];
  images: UploadedImage[];
}

export interface TestimonialForm {
  id: number;
  name: string;
  text: string;
  type: "Familia" | "Pareja" | "Amigos" | "Estadia";
}
