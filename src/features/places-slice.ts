import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Places, Place } from "../types/places";


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/places',
    }),
    endpoints(builder) {
        return {
            fetchPlaces: builder.query<Places, number | void>({
                query: () => '',
            })
        }
    }
})

export const { useFetchPlacesQuery } = apiSlice;


// interface PlacesState {
//     places: Places;
// }

// const initialState: PlacesState = {
//     places: [],
// }

// export const placesSlice = createSlice({
//     name: 'places',
//     initialState,
//     reducers: {
//         addPlace(state, action: PayloadAction<Place>) {
//             return void (state.places.push(action.payload));
//         },
//     }
// });

// export const { addPlace } = placesSlice.actions;
// export const placesSlice.reducer;