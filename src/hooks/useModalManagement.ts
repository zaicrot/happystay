import { useState } from "react";

export const useModalManagement = () => {
  const [editingListingId, setEditingListingId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openEditModal = (id: number) => {
    setEditingListingId(id);
    setIsModalOpen(true);
  };

  const closeEditModal = () => {
    setIsModalOpen(false);
    setEditingListingId(null);
  };

  return {
    editingListingId,
    isModalOpen,
    openEditModal,
    closeEditModal,
    setIsModalOpen,
  };
};
