import { configureStore } from "@reduxjs/toolkit";
import eventsListReducer from "./eventsListSlice";
import eventsFormReducer from "./eventsFormSlice";
export const store = configureStore({
  reducer: {
    eventsList: eventsListReducer,
    eventsForm: eventsFormReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
