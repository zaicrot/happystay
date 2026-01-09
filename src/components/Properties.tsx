import { ScrollReveal } from "@/hooks/useScrollReveal";
import PropertyCard, { PropertyData } from "./PropertyCard";
import { useEffect, useState } from "react";
import backendService from "@/services/backend";

const Properties = () => {
  const [properties, setProperties] = useState<PropertyData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        setLoading(true);
        const response = await backendService.getProperties();

        // Mapear la respuesta del backend al formato PropertyData
        const mappedProperties: PropertyData[] = response.data.map(
          (property: any) => ({
            id: property.id,
            name: property.name,
            location: property.location,
            price: property.price,
            period: property.period || "noche",
            images: property.images || [],
            guests: property.guests,
            bedrooms: property.bedrooms,
            bathrooms: property.bathrooms,
            amenities: property.amenities || [],
            featured: property.featured || false,
            airbnbUrl: property.airbnb_url || property.airbnbUrl || "",
          })
        );

        setProperties(mappedProperties);
        setError(null);
      } catch (err: any) {
        console.error("Error loading properties:", err);
        setError(err.message || "Error al cargar las propiedades");
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, []);

  return (
    <section
      id="properties"
      className="py-20 lg:py-32 bg-sand-light noise-overlay"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="max-w-2xl mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-ocean-light text-ocean font-medium text-sm mb-4">
            Happy Stay Houses
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Alojamientos premium, mejor organizados
          </h2>
          <p className="text-lg text-muted-foreground">
            Fotos atractivas, ubicación, capacidad y beneficios clave para
            elegir mejor. Calidad antes que cantidad.
          </p>
        </ScrollReveal>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {loading ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">Cargando propiedades...</p>
            </div>
          ) : error ? (
            <div className="col-span-full text-center py-12">
              <p className="text-red-500">{error}</p>
            </div>
          ) : properties.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">
                No hay propiedades disponibles
              </p>
            </div>
          ) : (
            properties.map((property, index) => (
              <PropertyCard
                key={property.id}
                property={property}
                index={index}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Properties;
