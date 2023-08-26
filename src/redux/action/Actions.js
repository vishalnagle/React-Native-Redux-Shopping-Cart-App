import { ADD_ITEM } from "../ActionTypes"
import { REMOVE_ITEMS } from "../ActionTypes";
import { THEME_CHANGE } from "../ActionTypes";
import { LANGUAGE_CHANGE } from "../ActionTypes";

export const addItemsToCart = (data) => ({
       type: ADD_ITEM, 
       payload: data, 
});

export const removeItemFromCart = (data) => ({
    type: REMOVE_ITEMS, 
    payload: data, 
});

export const changeTheme = (data) => ({
    type: THEME_CHANGE, 
    payload: data, 
});

export const languageChange = (data) => ({
    type: LANGUAGE_CHANGE, 
    payload: data, 
});