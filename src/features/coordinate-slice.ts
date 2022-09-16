import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CoordinateState {
    lat: number;
    lon: number;
}

const initialState: CoordinateState = {
    lat: 52.237049,
    lon: 21.017532,
}

export const CoordinateSlice