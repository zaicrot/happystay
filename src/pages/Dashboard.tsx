import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ArrowLeft,
  Upload,
  Trash2,
  Plus,
  Edit2,
  X,
  Waves,
  Wind,
  Flame,
  Home,
  Shield,
  UtensilsCrossed,
  Wifi,
  Coffee,
  Bed,
  Droplets,
  Car,
  Dumbbell,
  Wind as Fan,
  Navigation,
} from "lucide-react";

type UploadedImage = {
  id: string;
  name: string;
  preview: string;
};

type Amenity = {
  id: string;
  icon: string;
  label: string;
};

interface ListingForm {
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

interface TestimonialForm {
  id: number;
  name: string;
  text: string;
  type: "Familia" | "Pareja" | "Amigos" | "Estadia";
}

const initialListings: ListingForm[] = [
  {
    id: 1,
    name: "Costa Peruana 2182 | Playa Señoritas",
    location: "Playa Señoritas · Punta Hermosa",
    price: "Desde S/. 850",
    slug: "beachfront-playa-senoritas-piscina-terraza",
    guests: 6,
    bedrooms: 2,
    bathrooms: 2,
    airbnbUrl: "https://airbnb.com",
    featured: true,
    amenities: [
      { id: "1", icon: "beach", label: "Frente a la playa" },
      { id: "2", icon: "ac", label: "Aire Acondicionado" },
      { id: "3", icon: "grill", label: "Parrilla" },
      { id: "4", icon: "terrace", label: "Terraza" },
      { id: "5", icon: "security", label: "Seguridad garantizada" },
      { id: "6", icon: "kitchen", label: "Cocina Equipada" },
      { id: "7", icon: "pool", label: "Piscina Temperada" },
      { id: "8", icon: "wifi", label: "Zona de trabajo" },
      { id: "9", icon: "coffee", label: "Cafetera" },
      { id: "10", icon: "bedding", label: "Ropa de Cama" },
      { id: "11", icon: "bath", label: "Artículos de Aseo" },
      { id: "12", icon: "parking", label: "Estacionamiento" },
    ],
    images: [],
  },
  {
    id: 2,
    name: "Blue Paradise XIII | Playa Caballeros",
    location: "Playa Caballeros · Punta Hermosa",
    price: "Desde S/. 850",
    slug: "paradise-in-stunning-beach-house-playa-caballeros",
    guests: 8,
    bedrooms: 3,
    bathrooms: 2,
    airbnbUrl: "https://airbnb.com",
    featured: false,
    amenities: [
      { id: "1", icon: "beach", label: "Frente a la playa" },
      { id: "2", icon: "grill", label: "Parrilla" },
      { id: "3", icon: "terrace", label: "Terraza amplia" },
      { id: "4", icon: "security", label: "Seguridad garantizada" },
      { id: "5", icon: "kitchen", label: "Cocina Equipada" },
      { id: "6", icon: "pool", label: "Piscina grande" },
      { id: "7", icon: "wifi", label: "Zona de trabajo" },
      { id: "8", icon: "coffee", label: "Cafetera" },
      { id: "9", icon: "bedding", label: "Ropa de Cama" },
      { id: "10", icon: "bath", label: "Artículos de Aseo" },
      { id: "11", icon: "parking", label: "Estacionamiento" },
      { id: "12", icon: "gym", label: "Gimnasio" },
    ],
    images: [],
  },
  {
    id: 3,
    name: "Mirador del Mar | Dúplex con piscina",
    location: "Mirador del Mar · Punta Hermosa",
    price: "Consultar",
    slug: "duplex-mirador-del-mar-pool-best-view",
    guests: 10,
    bedrooms: 4,
    bathrooms: 3,
    airbnbUrl: "https://airbnb.com",
    featured: false,
    amenities: [
      { id: "1", icon: "beach", label: "Vista al mar" },
      { id: "2", icon: "ac", label: "Aire acondicionado" },
      { id: "3", icon: "grill", label: "Parrilla" },
      { id: "4", icon: "terrace", label: "Terraza amplia" },
      { id: "5", icon: "security", label: "Seguridad" },
      { id: "6", icon: "kitchen", label: "Cocina equipada" },
      { id: "7", icon: "pool", label: "Piscina" },
      { id: "8", icon: "wifi", label: "WiFi" },
      { id: "9", icon: "coffee", label: "Cafetera" },
      { id: "10", icon: "bedding", label: "Ropa de cama" },
      { id: "11", icon: "bath", label: "Baños completos" },
      { id: "12", icon: "parking", label: "2 Estacionamientos" },
      { id: "13", icon: "gym", label: "Gimnasio" },
    ],
    images: [],
  },
  {
    id: 4,
    name: "Sunset View Dúplex",
    location: "Sunset View · Punta Hermosa",
    price: "Consultar",
    slug: "sunset-view-duplex",
    guests: 8,
    bedrooms: 3,
    bathrooms: 2,
    airbnbUrl: "https://airbnb.com",
    featured: false,
    amenities: [
      { id: "1", icon: "beach", label: "Cerca al mar" },
      { id: "2", icon: "terrace", label: "Terraza" },
      { id: "3", icon: "pool", label: "Piscina" },
      { id: "4", icon: "kitchen", label: "Cocina equipada" },
      { id: "5", icon: "wifi", label: "WiFi" },
      { id: "6", icon: "parking", label: "Estacionamiento" },
    ],
    images: [],
  },
  {
    id: 5,
    name: "Vista Mar Prime",
    location: "Vista Mar Prime · Punta Hermosa",
    price: "Consultar",
    slug: "vista-mar-prime",
    guests: 12,
    bedrooms: 5,
    bathrooms: 4,
    airbnbUrl: "https://airbnb.com",
    featured: false,
    amenities: [
      { id: "1", icon: "beach", label: "Vista a la playa" },
      { id: "2", icon: "ac", label: "Aire acondicionado" },
      { id: "3", icon: "grill", label: "Parrilla" },
      { id: "4", icon: "pool", label: "Piscina" },
      { id: "5", icon: "kitchen", label: "Cocina equipada" },
      { id: "6", icon: "wifi", label: "WiFi" },
      { id: "7", icon: "parking", label: "Estacionamientos" },
    ],
    images: [],
  },
];

const initialTestimonials: TestimonialForm[] = [
  {
    id: 1,
    name: "Tatiana",
    text: "Un apartamento precioso, vista al mar y limpieza impecable.",
    type: "Familia",
  },
  {
    id: 2,
    name: "David Bermúdez",
    text: "Todo perfecto desde el check-in. William atento siempre.",
    type: "Amigos",
  },
  {
    id: 3,
    name: "Raquel",
    text: "Espacioso, limpio y seguro. Vista hermosa y cerca de restaurantes.",
    type: "Estadia",
  },
];

// Mapeo de iconos disponibles para amenities
const AMENITY_ICONS = {
  beach: { icon: Waves, label: "Playa/Vista al mar" },
  ac: { icon: Wind, label: "Aire Acondicionado" },
  grill: { icon: Flame, label: "Parrilla" },
  terrace: { icon: Home, label: "Terraza" },
  security: { icon: Shield, label: "Seguridad" },
  kitchen: { icon: UtensilsCrossed, label: "Cocina" },
  pool: { icon: Droplets, label: "Piscina" },
  wifi: { icon: Wifi, label: "WiFi" },
  coffee: { icon: Coffee, label: "Cafetera" },
  bedding: { icon: Bed, label: "Ropa de cama" },
  bath: { icon: Droplets, label: "Baño" },
  parking: { icon: Car, label: "Estacionamiento" },
  gym: { icon: Dumbbell, label: "Gimnasio" },
};

const Dashboard = () => {
  const [listings, setListings] = useState<ListingForm[]>(initialListings);
  const [testimonials, setTestimonials] =
    useState<TestimonialForm[]>(initialTestimonials);
  const [activeTab, setActiveTab] = useState("listings");
  const [editingListingId, setEditingListingId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const updateTestimonial = (
    id: number,
    field: keyof TestimonialForm,
    value: string
  ) => {
    setTestimonials((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const addTestimonial = () => {
    const nextId = testimonials.length
      ? Math.max(...testimonials.map((t) => t.id)) + 1
      : 1;
    setTestimonials((prev) => [
      ...prev,
      { id: nextId, name: "Nuevo", text: "", type: "Estadia" },
    ]);
  };

  const removeTestimonial = (id: number) => {
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
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

  const openEditModal = (id: number) => {
    setEditingListingId(id);
    setIsModalOpen(true);
  };

  const closeEditModal = () => {
    setIsModalOpen(false);
    setEditingListingId(null);
  };

  const currentEditingListing = listings.find((l) => l.id === editingListingId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-sand-light/20 to-background text-foreground">
      <header className="border-b border-border/40 bg-gradient-to-r from-card/80 to-ocean/5 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-ocean font-semibold">
              Admin Panel
            </p>
            <h1 className="text-3xl lg:text-4xl font-display font-bold text-foreground mt-1">
              HappyStay Manager
            </h1>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al sitio
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 lg:px-8 py-12 space-y-10">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-sm grid-cols-2 bg-card border border-border/40">
            <TabsTrigger value="listings" className="gap-2">
              Alojamientos
            </TabsTrigger>
            <TabsTrigger value="testimonials" className="gap-2">
              Testimonios
            </TabsTrigger>
          </TabsList>

          <TabsContent value="listings" className="space-y-6 mt-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gradient-to-r from-ocean/5 to-seafoam/5 border border-ocean/10 rounded-2xl p-6">
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Alojamientos
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {listings.length} propiedad{listings.length !== 1 ? "es" : ""}
                </p>
              </div>
              <Button
                size="lg"
                className="bg-ocean hover:bg-ocean-dark gap-2 whitespace-nowrap"
                onClick={addListing}
              >
                <Plus className="w-4 h-4" />
                Nuevo alojamiento
              </Button>
            </div>

            <div className="overflow-x-auto rounded-lg border border-border/40 shadow-sm">
              <table className="w-full">
                <thead className="bg-ocean/5 border-b border-border/40">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs uppercase tracking-wide font-semibold text-foreground">
                      Nombre
                    </th>
                    <th className="px-6 py-4 text-left text-xs uppercase tracking-wide font-semibold text-foreground">
                      Ubicación
                    </th>
                    <th className="px-6 py-4 text-left text-xs uppercase tracking-wide font-semibold text-foreground">
                      Capacidad
                    </th>
                    <th className="px-6 py-4 text-left text-xs uppercase tracking-wide font-semibold text-foreground">
                      Precio
                    </th>
                    <th className="px-6 py-4 text-left text-xs uppercase tracking-wide font-semibold text-foreground">
                      Imágenes
                    </th>
                    <th className="px-6 py-4 text-right text-xs uppercase tracking-wide font-semibold text-foreground">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {listings.map((listing) => (
                    <tr
                      key={listing.id}
                      className="hover:bg-card/50 transition"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="font-medium text-foreground">
                            {listing.name}
                          </div>
                          {listing.featured && (
                            <Badge className="bg-amber-500/20 text-amber-700 border-amber-200 text-xs">
                              Destacado
                            </Badge>
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          ID #{listing.id}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {listing.location}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-foreground space-y-0.5">
                          <div>{listing.guests} huéspedes</div>
                          <div className="text-xs text-muted-foreground">
                            {listing.bedrooms} hab · {listing.bathrooms} baños
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant="secondary">{listing.price}</Badge>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-foreground">
                            {listing.images.length}
                          </span>
                          {listing.images.length > 0 && (
                            <Badge className="bg-green-500/20 text-green-700 border-green-200">
                              Cargadas
                            </Badge>
                          )}
                          {listing.images.length === 0 && (
                            <Badge variant="outline" className="text-amber-600">
                              Sin imágenes
                            </Badge>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-2"
                            onClick={() => openEditModal(listing.id)}
                          >
                            <Edit2 className="w-4 h-4" />
                            Editar
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                            onClick={() => removeListing(listing.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {listings.length === 0 && (
              <Card className="border border-dashed border-border/40 bg-card/50">
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <p className="text-muted-foreground mb-4">
                    No hay alojamientos aún
                  </p>
                  <Button
                    className="gap-2 bg-ocean hover:bg-ocean-dark"
                    onClick={addListing}
                  >
                    <Plus className="w-4 h-4" />
                    Crear el primero
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="testimonials" className="space-y-6 mt-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gradient-to-r from-seafoam/5 to-ocean/5 border border-seafoam/10 rounded-2xl p-6">
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Testimonios
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Gestiona reseñas y comentarios de huéspedes
                </p>
              </div>
              <Button
                size="lg"
                className="bg-seafoam hover:bg-seafoam/90 gap-2 whitespace-nowrap"
                onClick={addTestimonial}
              >
                <Plus className="w-4 h-4" />
                Nuevo testimonio
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <Card
                  key={t.id}
                  className="border border-border/40 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardHeader className="bg-gradient-to-r from-seafoam/5 to-ocean/5 border-b border-border/40 flex flex-row items-center justify-between space-y-0 pb-4">
                    <div>
                      <CardTitle className="text-base text-foreground">
                        {t.name}
                      </CardTitle>
                      <Badge className="mt-2 bg-seafoam/20 text-seafoam border-0 text-xs">
                        {t.type}
                      </Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={() => removeTestimonial(t.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                        Nombre
                      </label>
                      <Input
                        value={t.name}
                        onChange={(e) =>
                          updateTestimonial(t.id, "name", e.target.value)
                        }
                        className="text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                        Tipo
                      </label>
                      <select
                        value={t.type}
                        onChange={(e) =>
                          updateTestimonial(
                            t.id,
                            "type",
                            e.target.value as TestimonialForm["type"]
                          )
                        }
                        className="w-full px-3 py-2 rounded-md border border-border/60 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ocean/50"
                      >
                        <option value="Familia">Familia</option>
                        <option value="Pareja">Pareja</option>
                        <option value="Amigos">Amigos</option>
                        <option value="Estadia">Estadía larga</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                        Texto
                      </label>
                      <Textarea
                        rows={4}
                        value={t.text}
                        onChange={(e) =>
                          updateTestimonial(t.id, "text", e.target.value)
                        }
                        className="text-sm resize-none"
                      />
                    </div>
                    <p className="text-[10px] text-muted-foreground italic">
                      Datos guardados localmente.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Modal de edición de alojamiento */}
        {currentEditingListing && (
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader className="border-b border-border/40 pb-4">
                <DialogTitle className="text-2xl font-display font-bold">
                  Editar: {currentEditingListing.name}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6 py-6">
                {/* Información básica */}
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
                        value={currentEditingListing.name}
                        onChange={(e) =>
                          updateListing(
                            currentEditingListing.id,
                            "name",
                            e.target.value
                          )
                        }
                        placeholder="ej: Costa Peruana 2182"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Precio
                      </label>
                      <Input
                        value={currentEditingListing.price}
                        onChange={(e) =>
                          updateListing(
                            currentEditingListing.id,
                            "price",
                            e.target.value
                          )
                        }
                        placeholder="ej: Desde S/. 850"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Ubicación
                    </label>
                    <Input
                      value={currentEditingListing.location}
                      onChange={(e) =>
                        updateListing(
                          currentEditingListing.id,
                          "location",
                          e.target.value
                        )
                      }
                      placeholder="ej: Playa Señoritas · Punta Hermosa"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      URL de Airbnb
                    </label>
                    <Input
                      value={currentEditingListing.airbnbUrl}
                      onChange={(e) =>
                        updateListing(
                          currentEditingListing.id,
                          "airbnbUrl",
                          e.target.value
                        )
                      }
                      placeholder="https://airbnb.com/..."
                      className="font-mono text-xs"
                    />
                  </div>
                </div>

                <Separator />

                {/* Capacidad y características */}
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
                        value={currentEditingListing.guests}
                        onChange={(e) =>
                          updateListing(
                            currentEditingListing.id,
                            "guests",
                            parseInt(e.target.value) || 1
                          )
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
                        value={currentEditingListing.bedrooms}
                        onChange={(e) =>
                          updateListing(
                            currentEditingListing.id,
                            "bedrooms",
                            parseInt(e.target.value) || 1
                          )
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Baños
                      </label>
                      <Input
                        type="number"
                        min="1"
                        value={currentEditingListing.bathrooms}
                        onChange={(e) =>
                          updateListing(
                            currentEditingListing.id,
                            "bathrooms",
                            parseInt(e.target.value) || 1
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={currentEditingListing.featured}
                      onChange={(e) =>
                        updateListing(
                          currentEditingListing.id,
                          "featured",
                          e.target.checked
                        )
                      }
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

                <Separator />

                {/* Servicios y amenidades */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground uppercase text-sm tracking-wide">
                      Servicios y amenidades
                    </h3>
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-2"
                      onClick={() => addAmenity(currentEditingListing.id)}
                    >
                      <Plus className="w-4 h-4" />
                      Agregar servicio
                    </Button>
                  </div>

                  {currentEditingListing.amenities.length === 0 ? (
                    <div className="text-center py-8 border border-dashed border-border/40 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        No hay servicios aún
                      </p>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="mt-2 gap-2"
                        onClick={() => addAmenity(currentEditingListing.id)}
                      >
                        <Plus className="w-4 h-4" />
                        Crear el primero
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {currentEditingListing.amenities.map((amenity) => (
                        <div
                          key={amenity.id}
                          className="flex gap-2 items-end p-3 bg-card border border-border/40 rounded-lg"
                        >
                          <div className="flex-1 grid grid-cols-2 gap-2">
                            <div className="space-y-1">
                              <label className="text-xs font-medium text-muted-foreground">
                                Icono
                              </label>
                              <div className="relative">
                                <select
                                  value={amenity.icon}
                                  onChange={(e) =>
                                    updateAmenity(
                                      currentEditingListing.id,
                                      amenity.id,
                                      "icon",
                                      e.target.value
                                    )
                                  }
                                  className="w-full px-3 py-2 rounded-md border border-border/60 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ocean/50 appearance-none"
                                >
                                  <option value="">Seleccionar icono</option>
                                  {Object.entries(AMENITY_ICONS).map(
                                    ([key, { label }]) => (
                                      <option key={key} value={key}>
                                        {label}
                                      </option>
                                    )
                                  )}
                                </select>
                                {amenity.icon &&
                                  AMENITY_ICONS[
                                    amenity.icon as keyof typeof AMENITY_ICONS
                                  ] && (
                                    <div className="absolute right-3 top-2 pointer-events-none">
                                      {(() => {
                                        const IconComponent =
                                          AMENITY_ICONS[
                                            amenity.icon as keyof typeof AMENITY_ICONS
                                          ]?.icon;
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
                                  updateAmenity(
                                    currentEditingListing.id,
                                    amenity.id,
                                    "label",
                                    e.target.value
                                  )
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
                            onClick={() =>
                              removeAmenity(
                                currentEditingListing.id,
                                amenity.id
                              )
                            }
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Separator />
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
                      onChange={(e) =>
                        addImagesToListing(
                          currentEditingListing.id,
                          e.target.files
                        )
                      }
                    />
                  </label>

                  {currentEditingListing.images.length > 0 ? (
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        {currentEditingListing.images.length} imagen
                        {currentEditingListing.images.length !== 1
                          ? "es"
                          : ""}{" "}
                        cargada
                        {currentEditingListing.images.length !== 1 ? "s" : ""}
                      </p>
                      <div className="grid grid-cols-4 gap-3">
                        {currentEditingListing.images.map((img) => (
                          <div
                            key={img.id}
                            className="relative group rounded-lg overflow-hidden"
                          >
                            <img
                              src={img.preview}
                              alt={img.name}
                              className="h-24 w-full object-cover border border-border/40 group-hover:border-ocean/60 transition"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                              <button
                                className="bg-destructive text-white rounded-full p-2 hover:bg-destructive/90 transition"
                                onClick={() =>
                                  removeImage(currentEditingListing.id, img.id)
                                }
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                            <p className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-[10px] p-1 truncate">
                              {img.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-sm text-muted-foreground">
                        No hay imágenes aún
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Carga imágenes para que aparezcan en la galería
                      </p>
                    </div>
                  )}
                </div>

                <Separator />

                {/* Acciones */}
                <div className="flex items-center justify-between pt-2">
                  <Badge variant="secondary" className="text-xs">
                    ID #{currentEditingListing.id}
                  </Badge>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={closeEditModal}
                      className="gap-2"
                    >
                      Cancelar
                    </Button>
                    <Button
                      className="bg-ocean hover:bg-ocean-dark gap-2"
                      onClick={closeEditModal}
                    >
                      Listo
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
