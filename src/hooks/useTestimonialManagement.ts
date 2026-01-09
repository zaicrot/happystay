import { useState, useEffect } from "react";
import { TestimonialForm } from "@/types/dashboard";
import backendService from "@/services/backend";

export const useTestimonialManagement = (
  initialTestimonials: TestimonialForm[]
) => {
  const [testimonials, setTestimonials] =
    useState<TestimonialForm[]>(initialTestimonials);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar testimonios desde el backend al montar el componente
  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        setLoading(true);
        const response = await backendService.getTestimonials();
        const data = response.data || response;

        // Mapear respuesta del backend al formato TestimonialForm
        const mappedTestimonials: TestimonialForm[] = data.map((t: any) => ({
          id: t.id,
          name: t.name,
          location: t.location,
          text: t.text,
          rating: t.rating || 5,
          avatar: t.avatar,
          is_active: t.is_active !== false,
          type: t.location?.split("·")[0].trim() || "Estadia",
        }));

        setTestimonials(mappedTestimonials);
        setError(null);
      } catch (err: any) {
        console.error("Error loading testimonials:", err);
        setError(err.message || "Error al cargar testimonios");
        // Mantener datos iniciales en caso de error
        setTestimonials(initialTestimonials);
      } finally {
        setLoading(false);
      }
    };

    loadTestimonials();
  }, []);

  const updateTestimonial = async (
    id: number,
    field: keyof TestimonialForm,
    value: string | number | boolean
  ) => {
    // Actualizar en UI inmediatamente
    setTestimonials((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );

    // Sincronizar con backend
    try {
      const testimonial = testimonials.find((t) => t.id === id);
      if (testimonial) {
        const updateData = {
          ...testimonial,
          [field]: value,
        };
        await backendService.updateTestimonial(id, updateData);
      }
    } catch (err) {
      console.error("Error updating testimonial:", err);
    }
  };

  const addTestimonial = async (testimonialData?: Partial<TestimonialForm>) => {
    try {
      const newTestimonial = testimonialData || {
        name: "Nuevo testimonio",
        location: "Tipo",
        text: "",
        rating: 5,
        avatar: "NE",
        is_active: true,
      };

      const response = await backendService.createTestimonial(newTestimonial);
      const createdTestimonial = response.data || response;

      setTestimonials((prev) => [
        ...prev,
        {
          id: createdTestimonial.id,
          name: createdTestimonial.name,
          location: createdTestimonial.location,
          text: createdTestimonial.text,
          rating: createdTestimonial.rating || 5,
          avatar: createdTestimonial.avatar,
          is_active: createdTestimonial.is_active,
          type: createdTestimonial.location?.split("·")[0].trim() || "Estadia",
        },
      ]);
    } catch (err) {
      console.error("Error creating testimonial:", err);
    }
  };

  const removeTestimonial = async (id: number) => {
    try {
      await backendService.deleteTestimonial(id);
      setTestimonials((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.error("Error deleting testimonial:", err);
    }
  };

  const saveTestimonial = async (testimonial: TestimonialForm) => {
    try {
      const updateData = {
        name: testimonial.name,
        location: testimonial.location,
        text: testimonial.text,
        rating: testimonial.rating,
        avatar: testimonial.avatar,
        is_active: testimonial.is_active ?? true,
      };

      await backendService.updateTestimonial(testimonial.id, updateData);

      // Actualizar el estado local
      setTestimonials((prev) =>
        prev.map((t) => (t.id === testimonial.id ? testimonial : t))
      );
    } catch (err) {
      console.error("Error saving testimonial:", err);
      throw err;
    }
  };

  return {
    testimonials,
    loading,
    error,
    updateTestimonial,
    addTestimonial,
    removeTestimonial,
    saveTestimonial,
  };
};
