import { configureStore } from "@reduxjs/toolkit";
import { placesSlice } from "./places-slice";

export const store = configureStore({
    reducer: {
        places: placesSlice.reducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;