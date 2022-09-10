import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Places, Place } from "../types/places";


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001',
    }),
    endpoints(builder) {
        return {
            fetchPlaces: builder.query<Places, number | void>({
                query: () => '/places',
            })
        }
    }
})

export const { useFetchPlacesQuery } = apiSlice;


