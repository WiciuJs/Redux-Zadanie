import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface FormState {
  name: string;
  eventName: string;
  city: string;
}
const initialState: FormState = {
  name: '',
  eventName: '',
  city: '',
};
export const eventsFormSlice = createSlice({
  name: 'eventsForm',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<FormState>) => {
      return { ...state, ...action.payload };
    },
    resetForm: () => initialState,
  },
});
export const { setFormData, resetForm } = eventsFormSlice.actions;
export default eventsFormSlice.reducer;
