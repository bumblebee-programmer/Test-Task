import { useState, useEffect } from "react";
import { useGetCompaniesQuery } from "../Redux/services/companyApi";
import { Company } from "../types/companyData";

export const useFetchCompanies = () => {
  const { data: initialData, error, isLoading } = useGetCompaniesQuery();
  const [companies, setCompanies] = useState<Company[]>(initialData || []);

  useEffect(() => {
    if (initialData) {
      setCompanies(initialData);
    }
  }, [initialData]);

  return {
    companies,
    error,
    isLoading,
    setCompanies,
  };
};
