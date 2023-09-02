import { configureStore } from "@reduxjs/toolkit";
import eventsListReducer from "./eventsListSlice";

export const store = configureStore({
  reducer: {
    eventsList: eventsListReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
