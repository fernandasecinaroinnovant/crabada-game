import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import crabsSliceReducer from "./slices/crabsSlice";

const store = configureStore({
  reducer: {
    crabs: crabsSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
