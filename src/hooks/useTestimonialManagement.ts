import { useState } from "react";
import { TestimonialForm } from "@/types/dashboard";

export const useTestimonialManagement = (
  initialTestimonials: TestimonialForm[]
) => {
  const [testimonials, setTestimonials] =
    useState<TestimonialForm[]>(initialTestimonials);

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

  return {
    testimonials,
    updateTestimonial,
    addTestimonial,
    removeTestimonial,
  };
};
