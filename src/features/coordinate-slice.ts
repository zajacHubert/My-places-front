import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface CoordinateState {
    coordinates: [number, number][];
}

const initialState: CoordinateState = {
    coordinates: [[52.237049, 21.017532,]],
}

export const coordinateSlice = createSlice({
    'name': 'coordinate',
    initialState,
    reducers: {
        setCoordinate(state, action: PayloadAction<[number, number][]>) {
            return state = { coordinates: action.payload }
        }
    }
})

export const { setCoordinate } = coordinateSlice.actions;