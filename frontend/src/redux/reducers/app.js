import {
  SET_ERROR_MESSAGE,
  SET_SUCCESS_MESSAGE,
  SET_FILTER_INPUT_TEXT,
  SET_ALL_MEALS_LIST,
  SET_LOADING_MESSAGE
} from '../actions/types';
import { initialState } from '../store/initialState';

export function app(state = initialState.app, action) {
  switch (action.type) {

    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case SET_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: action.payload,
      };
    case SET_FILTER_INPUT_TEXT:
      return {
        ...state,
        filteredInputText: action.payload,
      };
    case SET_ALL_MEALS_LIST:
      return {
        ...state,
        allMealsList: action.payload,
      };
    case SET_LOADING_MESSAGE:
      return {
        ...state,
        isGridDataLoading: action.payload,
      };
    default:
      return state;
  }
}
