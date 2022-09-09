import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Places, Place } from "../types/places";


interface PlacesState {
    places: Places;
}

const initialState: PlacesState = {
    places: [],
}

export const placesSlice = createSlice({
    name: 'places',
    initialState,
    reducers: {
        addPlace(state, action: PayloadAction<Place>) {
            return void (state.places.push(action.payload));
        },
    }
});

export const { addPlace } = placesSlice.actions;
// export const placesSlice.reducer;