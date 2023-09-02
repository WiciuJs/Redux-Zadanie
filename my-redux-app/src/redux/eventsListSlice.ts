import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormData } from './types';
import { RootState } from './store';

interface State {
  formDataList: FormData[];
}

const initialState: State = {
  formDataList: [],
};


export const eventsListSlice = createSlice({
  name: 'eventsList',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.formDataList = state.formDataList.concat(action.payload);
    },
    deleteEvent: (state, action: PayloadAction<number>) => {
      state.formDataList.splice(action.payload, 1);
    },
  },
});

export const { addEvent, deleteEvent} = eventsListSlice.actions

export const selectEvents = (state: RootState) => state.eventsList.formDataList

export default eventsListSlice.reducer
