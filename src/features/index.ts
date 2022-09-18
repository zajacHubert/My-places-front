import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api-places-slice";
import { coordinateSlice } from "./coordinate-slice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        coordinate: coordinateSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    }

})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;