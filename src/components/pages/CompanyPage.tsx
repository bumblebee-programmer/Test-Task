import React, { useState } from "react";
import CompanyItem from "../UI/СomponentItem/CompanyItem";
import { useFetchCompanies } from "../../HOOKS/useFetchCompanies";
import { useUpdateCompanies } from "../../HOOKS/useUpdateCompanies";
import DeleteCheckedButton from "../UI/DeleteButton/DeleteCheckedButton";

export default function CompanyPage() {
  const { companies, isLoading, setCompanies } = useFetchCompanies();
  const {
    handleCheckboxChange,
    handleNameChange,
    handleAddressChange,
    handleSaveChanges,
  } = useUpdateCompanies(companies, setCompanies);

  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleCheckboxChangeWrapper = (id: number) => {
    handleCheckboxChange(id);
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((selectedId) => selectedId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleDelete = () => {
    setCompanies((prev) =>
      prev.filter((company) => !selectedIds.includes(company.id))
    );
    setSelectedIds([]);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <DeleteCheckedButton selectedIds={selectedIds} onDelete={handleDelete} />

      <table style={{ width: "100vw", padding: "0", margin: "0" }}>
        <thead>
          <tr>
            <th>Выбрать поле</th>
            <th>Компания</th>
            <th>Адрес</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <CompanyItem
              key={company.id}
              company={company}
              onCheckboxChange={handleCheckboxChangeWrapper}
              onNameChange={handleNameChange}
              onAddressChange={handleAddressChange}
              onSaveChanges={handleSaveChanges}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
