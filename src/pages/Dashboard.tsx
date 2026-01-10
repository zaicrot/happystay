import { useState } from "react";
import { ListingForm, TestimonialForm } from "@/types/dashboard";
import { initialListings, initialTestimonials } from "@/constants/initialData";
import { useListingManagement } from "@/hooks/useListingManagement";
import { useTestimonialManagement } from "@/hooks/useTestimonialManagement";
import { useModalManagement } from "@/hooks/useModalManagement";
import { DashboardHeader } from "@/components/Dashboard/DashboardHeader";
import { DashboardTabs } from "@/components/Dashboard/DashboardTabs";
import { EditListingModal } from "@/components/Dashboard/EditListingModal";
import { EditTestimonialModal } from "@/components/Dashboard/EditTestimonialModal";

/**
 * Dashboard Page
 *
 * Página principal del administrador de HappyStay.
 * Gestiona alojamientos y testimonios de forma modular y organizada.
 *
 * Estructura:
 * - DashboardHeader: Encabezado superior con navegación
 * - DashboardTabs: Tabs para cambiar entre alojamientos y testimonios
 * - EditListingModal: Modal para editar detalles de alojamientos
 *
 * Lógica de estado:
 * - useListingManagement: Hook para manejar alojamientos
 * - useTestimonialManagement: Hook para manejar testimonios
 * - useModalManagement: Hook para manejar estado del modal
 */
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("listings");
  const [editingTestimonialId, setEditingTestimonialId] = useState<
    number | null
  >(null);
  const [isTestimonialModalOpen, setIsTestimonialModalOpen] = useState(false);

  // Lógica de alojamientos
  const {
    listings,
    loading,
    error,
    updateListing,
    addListing,
    removeListing,
    uploadImages,
    removeImage,
  } = useListingManagement(initialListings);

  // Lógica de testimonios
  const {
    testimonials,
    loading: testimonialsLoading,
    error: testimonialsError,
    updateTestimonial,
    addTestimonial,
    removeTestimonial,
    saveTestimonial,
  } = useTestimonialManagement(initialTestimonials);

  // Lógica del modal
  const {
    editingListingId,
    isModalOpen,
    openEditModal,
    closeEditModal,
    setIsModalOpen,
  } = useModalManagement();

  const currentEditingListing = listings.find((l) => l.id === editingListingId);
  const currentEditingTestimonial = editingTestimonialId
    ? testimonials.find((t) => t.id === editingTestimonialId)
    : null;

  const handleAddTestimonial = () => {
    setEditingTestimonialId(null);
    setIsTestimonialModalOpen(true);
  };

  const handleEditTestimonial = (id: number) => {
    setEditingTestimonialId(id);
    setIsTestimonialModalOpen(true);
  };

  const handleSaveTestimonial = async (testimonial: TestimonialForm) => {
    try {
      if (testimonial.id === 0) {
        // Nuevo testimonial - crear con todos los datos del formulario
        await addTestimonial({
          name: testimonial.name,
          location: testimonial.location,
          text: testimonial.text,
          rating: testimonial.rating,
          avatar: testimonial.avatar,
          is_active: testimonial.is_active,
        });
      } else {
        // Testimonio existente - actualizar con una sola petición
        await saveTestimonial(testimonial);
      }
    } catch (err) {
      console.error("Error saving testimonial:", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <p className="text-xl">Cargando datos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-red-500">
        <p className="text-xl">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-sand-light/20 to-background text-foreground">
      <DashboardHeader onBackClick={() => window.history.back()} />

      <main className="container mx-auto px-4 lg:px-8 py-12 space-y-10">
        <DashboardTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          listings={listings}
          testimonials={testimonials}
          onAddListing={addListing}
          onAddTestimonial={handleAddTestimonial}
          onEditListing={openEditModal}
          onDeleteListing={removeListing}
          onUpdateTestimonial={updateTestimonial}
          onDeleteTestimonial={removeTestimonial}
          onEditTestimonial={handleEditTestimonial}
        />

        <EditListingModal
          listing={currentEditingListing}
          isOpen={isModalOpen}
          onClose={closeEditModal}
          onUpdateListing={updateListing}
          uploadImages={uploadImages}
          onRemoveImage={removeImage}
        />

        <EditTestimonialModal
          testimonial={currentEditingTestimonial || null}
          isOpen={isTestimonialModalOpen}
          onClose={() => setIsTestimonialModalOpen(false)}
          onSave={handleSaveTestimonial}
        />
      </main>
    </div>
  );
};

export default Dashboard;
