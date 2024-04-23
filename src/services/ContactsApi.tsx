import React from "react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Contact } from "../models/contact.model";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    contacts: builder.query<Contact[], void>({
      query: () => "/contacts",
      providesTags: ["Contact"],
    }),
    addContact: builder.mutation<{}, Contact>({
      query: (contact) => ({
        url: "/contacts",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Contact"],
    }),
    deleteContact: builder.mutation<{}, number>({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
