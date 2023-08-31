import { ADD_FORM_DATA, DELETE_FORM_DATA } from './actionTypes';
import { FormData } from './types';

export const addFormData = (formData: FormData) => ({
  type: ADD_FORM_DATA,
  payload: formData,
});

export const deleteFormData = (index: number) => ({
  type: DELETE_FORM_DATA,
  payload: index,
});
