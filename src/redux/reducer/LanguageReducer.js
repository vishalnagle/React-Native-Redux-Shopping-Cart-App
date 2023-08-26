import { LANGUAGE_CHANGE } from "../ActionTypes";

export const LanguageReducer = (state = 'ENGLISH', action) => {

console.log("LANGUAGE_CHANGE asdflasdj"); 

    switch(action.type){

        case LANGUAGE_CHANGE: {
            return action.payload; 
        };

        default: 
        return state; 
    }
};