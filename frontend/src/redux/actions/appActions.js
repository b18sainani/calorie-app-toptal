
import {
    SET_ERROR_MESSAGE, SET_FILTER_INPUT_TEXT, SET_ALL_MEALS_LIST, SET_IS_USER_CREATED, SET_CURRENT_USER,
    SET_LOADING_MESSAGE, SET_SUCCESS_MESSAGE
} from './types';
import { setAuthToken } from '../../utils/appUtils'
import { GET_ALL_MEAL_DATA_API, ADD_MEAL_API, UPDATE_MEAL_API, DELETE_MEAL_API, REGISTER_USER_API,LOGIN_USER_API } from '../../utils/apiUtils';
import jwt_decode from "jwt-decode";

import axios from 'axios';
export const setFilterInputText = data => dispatch => {
    dispatch({
        type: SET_FILTER_INPUT_TEXT,
        payload: data,
    });
};
export const setAllMealsList = data => dispatch => {
    dispatch({
        type: SET_ALL_MEALS_LIST,
        payload: data,
    });
};
export const setCurrentUser = decoded => dispatch => {
    dispatch({
        type: SET_CURRENT_USER,
        payload: decoded,
    });
};
export const setIsUserCreated = data => dispatch => {
    dispatch({
        type: SET_IS_USER_CREATED,
        payload: data,
    });
};
export const setSuccessMessage = data => dispatch => {
    dispatch({
        type: SET_SUCCESS_MESSAGE,
        payload: data,
    });
};
export const setErrorMessage = data => dispatch => {
    dispatch({
        type: SET_ERROR_MESSAGE,
        payload: data,
    });
};
export const setLoadingMessage = data => dispatch => {
    dispatch({
        type: SET_LOADING_MESSAGE,
        payload: data,
    });
};

export const fetchAllMealsList = () => dispatch => {
    axios.get(GET_ALL_MEAL_DATA_API)
        .then(({ data }) => {
            dispatch(setAllMealsList(data));
            dispatch(setLoadingMessage(false));
        })
        .catch(err => {
            console.log(err);
            dispatch(setLoadingMessage(false));
        }
        );
};

//Add your Meal
export const addMeal = (mealData) => dispatch => {
    axios.post(ADD_MEAL_API, mealData)
        .then(res => {
            console.log(res);
            dispatch(fetchAllMealsList());
            dispatch(setSuccessMessage("Meal Added Successfully"));
        })
        .catch(err => {
            console.log(err);
            dispatch(setErrorMessage("Error in Adding Meal"));
        }
        );
};
//Edit a meal
export const editMeal = (mealId, mealData) => dispatch => {
    axios.post(UPDATE_MEAL_API + mealId, mealData)
        .then(res => {
            dispatch(fetchAllMealsList());
            dispatch(setSuccessMessage("Meal Updated Successfully"));
        })
        .catch(err => {
            console.log(err);
            dispatch(setErrorMessage("Error in updating Meal"));
        }
        );
};
//Delete a meal
export const deleteMeal = (mealId) => dispatch => {
    axios.get(DELETE_MEAL_API + mealId)
        .then(res => {
            dispatch(fetchAllMealsList());
            dispatch(setSuccessMessage("Meal Deleted Successfully"));
        })
        .catch(err => {
            console.log(err);
            dispatch(setErrorMessage("Error in deleting Meal"));
        });
};

// Register User
export const registerUser = (userData, history) => dispatch => {
    axios.post(REGISTER_USER_API, userData)
        .then(res => console.log(res))
        .catch(err =>
            console.log(err)
        );
};
// Login - get user token
export const loginUser = userData => dispatch => {
    axios.post(LOGIN_USER_API, userData)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => {
            dispatch(setErrorMessage(err.response.data));
        });
};

// Log user out
export const logoutUser = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
};
