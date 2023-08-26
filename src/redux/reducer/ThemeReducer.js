import { THEME_CHANGE } from "../action/Actions"

export const ThemeReducers = (state = false, action) => {

    console.log("theme change ThemeReducers 5--> ", state, " action type -> ", action.type);

    switch(action.type){

        case 'THEME_CHANGE': {
            console.log("theme change ThemeReducers 10 --> ", state, " action -> ", action);
            return action.payload; 
        };

        default: 
        return state; 
    }
};