import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Company } from "../../types/companyData";

export const companyApi = createApi({
  reducerPath: "companyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getCompanies: builder.query<Company[], void>({
      query: () => "/componys",
    }),
    updateCompany: builder.mutation<void, Company>({
      query: (company) => ({
        url: `/componys/${company.id}`,
        method: "PUT",
        body: company,
      }),
    }),
    setCompany: builder.mutation<void, Company>({
      query: (company) => ({
        url: `/componys`,
        method: "POST",
        body: company,
      }),
    }),
    deleteCompany: builder.mutation<void, string>({
      query: (id) => ({
        url: `/componys/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetCompaniesQuery,
  useUpdateCompanyMutation,
  useSetCompanyMutation,
  useDeleteCompanyMutation,
} = companyApi;
