import React from "react";
import CompanyPage from "./components/pages/CompanyPage";
import AddForm from "./components/UI/AddForm/AddForm";

export default function App() {
  return (
    <div>
      <AddForm />
      <CompanyPage />
    </div>
  );
}
