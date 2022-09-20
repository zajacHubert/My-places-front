import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Places, PlaceToAdd } from "../types/places";

const isDev = process.env.NODE_ENV === 'development';
const baseUrlForApp = isDev ? 'http://localhost:3001' : 'https://my-places-hubert.herokuapp.com/';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrlForApp,
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


