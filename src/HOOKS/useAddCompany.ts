import { useState } from "react";
import {
  useSetCompanyMutation,
  useGetCompaniesQuery,
} from "../Redux/services/companyApi";
import { Company } from "../types/companyData";

export const useAddCompany = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [setCompany] = useSetCompanyMutation();
  const { refetch } = useGetCompaniesQuery();

  const handleAddCompany = async () => {
    if (name.trim() && address.trim()) {
      const newCompany: Company = {
        id: Date.now().toString(),
        name,
        addres: address,
        checkBox: false,
      };
      try {
        await setCompany(newCompany).unwrap();
        setName(""); 
        setAddress("");
        refetch();
      } catch (error) {
        console.error("Ошибка при добавлении компании:", error);
      }
    } else {
      alert("Заполните все поля");
    }
  };

  return {
    name,
    address,
    setName,
    setAddress,
    handleAddCompany,
  };
};
