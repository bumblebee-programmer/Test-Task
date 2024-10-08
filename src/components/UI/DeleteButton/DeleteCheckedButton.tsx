import React from "react";
import { useDeleteCompanies } from "../../../HOOKS/useDeleteCompanies";

interface DeleteCheckedButtonProps {
  selectedIds: number[];
  onDelete: () => void;
}

export default function DeleteCheckedButton({
  selectedIds,
  onDelete,
}: DeleteCheckedButtonProps) {
  const { deleteSelectedCompanies } = useDeleteCompanies();

  const handleDelete = async () => {
    await deleteSelectedCompanies(selectedIds);
    onDelete();
  };

  return (
    <button onClick={handleDelete} disabled={selectedIds.length === 0}>
      Удалить выделенные
    </button>
  );
}
