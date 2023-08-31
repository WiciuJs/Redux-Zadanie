import { ADD_FORM_DATA, DELETE_FORM_DATA } from './actionTypes';
import { FormData } from './types';

interface State {
  formDataList: FormData[];
}

interface Action {
  type: string;
  payload: any;
}

const initialState: State = {
  formDataList: [],
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_FORM_DATA:
      return {
        ...state,
        formDataList: [...state.formDataList, action.payload],
      };
    case DELETE_FORM_DATA:
      return {
        ...state,
        formDataList: state.formDataList.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
