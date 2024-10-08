import React from "react";
import styles from "./AddForm.module.scss";
import { useAddCompany } from "../../../HOOKS/useAddCompany";

export default function AddForm() {
  const { name, address, setName, setAddress, handleAddCompany } =
    useAddCompany();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddCompany();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Название Компании"
        className={styles.input}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Адрес Компании"
        className={styles.input}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button type="submit" className={styles.button}>
        Добавить информацию
      </button>
    </form>
  );
}
