import { useDeleteCompanyMutation } from "../Redux/services/companyApi";

export const useDeleteCompanies = () => {
  const [deleteCompany] = useDeleteCompanyMutation();

  const deleteSelectedCompanies = async (selectedIds: number[]) => {
    if (selectedIds.length === 0) return;

    await Promise.all(selectedIds.map((id) => deleteCompany(id).unwrap()));
  };

  return { deleteSelectedCompanies };
};
