import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Places, Place, PlaceToAdd } from "../types/places";


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001',
    }),
    tagTypes: ['Place'],
    endpoints(builder) {
        return {
            fetchPlaces: builder.query<Places, number | void>({
                query: () => '/places',
                providesTags: ['Place'],
            }),
            addPlace: builder.mutation<{}, PlaceToAdd>({
                query: (place) => ({
                    url: '/places',
                    method: 'POST',
                    body: place,
                })
            }),
            deletePlace: builder.mutation({
                query: ({ id }) => ({
                    url: `/places/${id}`,
                    method: 'DELETE',
                    body: id,
                }),
                invalidatesTags: ['Place'],
            }),
        }
    }

})

export const { useFetchPlacesQuery, useAddPlaceMutation, useDeletePlaceMutation } = apiSlice;


