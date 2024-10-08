import React from "react";
import styles from "./CompanyItem.module.scss";
import { Company } from "../../../types/companyData";

interface CompanyItemProps {
  company: Company;
  onCheckboxChange: (id: number) => void;
  onNameChange: (id: number, newName: string) => void;
  onAddressChange: (id: number, newAddress: string) => void;
  onSaveChanges: (company: Company) => void;
}

export default function CompanyItem({
  company,
  onCheckboxChange,
  onNameChange,
  onAddressChange,
  onSaveChanges,
}: CompanyItemProps) {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    onNameChange(company.id, newName);
    onSaveChanges({ ...company, name: newName });
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAddress = e.target.value;
    onAddressChange(company.id, newAddress);
    onSaveChanges({ ...company, addres: newAddress });
  };

  return (
    <tr className={company.checkBox ? styles.selected : styles.tr}>
      <td>
        <input
          type="checkbox"
          checked={company.checkBox}
          onChange={() => onCheckboxChange(company.id)}
          className={styles.checkbox}
        />
      </td>
      <td>
        <input
          type="text"
          value={company.name}
          onChange={handleNameChange}
          disabled={!company.checkBox}
          className={styles.input}
        />
      </td>
      <td>
        <input
          type="text"
          value={company.addres}
          onChange={handleAddressChange}
          disabled={!company.checkBox}
          className={styles.input}
        />
      </td>
    </tr>
  );
}
