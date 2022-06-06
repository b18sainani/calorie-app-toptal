import { initialState } from '../store/initialState';
import {
    SET_CURRENT_USER,
    USER_LOADING
} from "../actions/types";
const isEmpty = require("is-empty");


export function auth(state = initialState.app, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case USER_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}