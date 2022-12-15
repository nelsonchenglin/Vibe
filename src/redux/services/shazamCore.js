import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreAPI = createApi({
  reducerPath: "shazamCoreAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "0adbfe03d1msh4befc8363f140a1p1d82fdjsn66c733961cd7"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: "/charts/world" }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreAPI;
