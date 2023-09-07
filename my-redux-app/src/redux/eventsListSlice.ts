import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormData } from './types';

interface State {
  formDataList: FormData[];
}
const initialState: State = {
  formDataList: [],
};
const eventsListSlice = createSlice({
  name: 'eventsList',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<FormData>) => {
      state.formDataList.push(action.payload);
    },
    deleteEvent: (state, action: PayloadAction<number>) => {
      state.formDataList = state.formDataList.filter((event) => event._id !== action.payload);
    },
    setEvents: (state, action: PayloadAction<FormData[]>) => {
      state.formDataList = action.payload;
    }
  },
});
export const { addEvent, deleteEvent, setEvents } = eventsListSlice.actions;

export const selectEvents = (state: { eventsList: State }) => state.eventsList.formDataList;

export default eventsListSlice.reducer;
