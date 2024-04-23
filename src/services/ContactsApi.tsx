import React from "react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const contactsApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
    endpoints: (builder) => ({
        contacts: builder.query({
            query: () => "contacts",
        }),
