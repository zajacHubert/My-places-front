import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CoordinateState {
    lat: number;
    lon: number;
}

const initialState: CoordinateState = {
    lat: 52.237049,
    lon: 21.017532,
}

export const coordinateSlice = createSlice({
    'name': 'coordinate',
    initialState,
    reducers: {
        setCoordinate(state, action: PayloadAction<{ lat: number, lon: number }>) {
            state = {
                lat: action.payload.lat,
                lon: action.payload.lon,
            }
        }
    }
})

export const { setCoordinate } = coordinateSlice.actions;