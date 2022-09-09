import { configureStore } from "@reduxjs/toolkit";
// import { placesSlice } from "./places-slice";
import { apiSlice } from "./places-slice";

export const store = configureStore({
    reducer: {
        // places: placesSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;