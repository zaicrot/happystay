import { useState } from "react";
import { ListingForm, TestimonialForm } from "@/types/dashboard";
import { initialListings, initialTestimonials } from "@/constants/initialData";
import { useListingManagement } from "@/hooks/useListingManagement";
import { useTestimonialManagement } from "@/hooks/useTestimonialManagement";
import { useModalManagement } from "@/hooks/useModalManagement";
import { DashboardHeader } from "@/components/Dashboard/DashboardHeader";
import { DashboardTabs } from "@/components/Dashboard/DashboardTabs";
import { EditListingModal } from "@/components/Dashboard/EditListingModal";

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

  // Lógica de alojamientos
  const {
    listings,
    updateListing,
    addListing,
    removeListing,
    addImagesToListing,
    removeImage,
    addAmenity,
    removeAmenity,
    updateAmenity,
  } = useListingManagement(initialListings);

  // Lógica de testimonios
  const { testimonials, updateTestimonial, addTestimonial, removeTestimonial } =
    useTestimonialManagement(initialTestimonials);

  // Lógica del modal
  const {
    editingListingId,
    isModalOpen,
    openEditModal,
    closeEditModal,
    setIsModalOpen,
  } = useModalManagement();

  const currentEditingListing = listings.find((l) => l.id === editingListingId);

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
          onAddTestimonial={addTestimonial}
          onEditListing={openEditModal}
          onDeleteListing={removeListing}
          onUpdateTestimonial={updateTestimonial}
          onDeleteTestimonial={removeTestimonial}
        />

        <EditListingModal
          listing={currentEditingListing}
          isOpen={isModalOpen}
          onClose={closeEditModal}
          onUpdateListing={updateListing}
          onAddAmenity={addAmenity}
          onRemoveAmenity={removeAmenity}
          onUpdateAmenity={updateAmenity}
          onAddImages={addImagesToListing}
          onRemoveImage={removeImage}
        />
      </main>
    </div>
  );
};

export default Dashboard;
