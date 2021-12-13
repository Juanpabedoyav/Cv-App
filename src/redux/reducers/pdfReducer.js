import { types } from "../types/types";


export const pdfReducer = (state={}, action)=>{
switch (action.type) {
    case types.formcv1:
        return {
          ...state,
           form1: action.payload,
        };
    case types.formcv2:
        return {
          ...state,
           form2: action.payload,
        };  
    default:
        return state
        
}

}