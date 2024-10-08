import { useUpdateCompanyMutation } from "../Redux/services/companyApi";
import { Company } from "../types/companyData";

export const useUpdateCompanies = (
  companies: Company[],
  setCompanies: React.Dispatch<React.SetStateAction<Company[]>>
) => {
  const [updateCompany] = useUpdateCompanyMutation();

  const handleCheckboxChange = (id: number) => {
    const updatedCompanies = companies.map((company) =>
      company.id === id ? { ...company, checkBox: !company.checkBox } : company
    );
    setCompanies(updatedCompanies);

    const updatedCompany = updatedCompanies.find(
      (company) => company.id === id
    );
    if (updatedCompany) {
      updateCompany(updatedCompany);
    }
  };

  const handleNameChange = (id: number, newName: string) => {
    const updatedCompanies = companies.map((company) =>
      company.id === id ? { ...company, name: newName } : company
    );
    setCompanies(updatedCompanies);
  };

  const handleAddressChange = (id: number, newAddress: string) => {
    const updatedCompanies = companies.map((company) =>
      company.id === id ? { ...company, addres: newAddress } : company
    );
    setCompanies(updatedCompanies);
  };

  const handleSaveChanges = (company: Company) => {
    updateCompany(company);
  };

  return {
    handleCheckboxChange,
    handleNameChange,
    handleAddressChange,
    handleSaveChanges,
  };
};
