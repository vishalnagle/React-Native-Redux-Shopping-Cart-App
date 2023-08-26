import { ADD_ITEM } from "../ActionTypes"; 
import { REMOVE_ITEMS } from "../ActionTypes"; 
export const Reducers = (state=[], action) => {

    console.log("theme change Reducers --> ", state);

    switch(action.type){
        case  ADD_ITEM: 
            return [...state, action.payload];
        

        case  REMOVE_ITEMS: 
            const deleteArray = state.filter((item, index) => {
                   return  (index != action.payload);    
            })
            return deleteArray;
        

        default: 
            return state; 
        
    }

}