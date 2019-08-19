import * as types from "../actions/actionTypes";

export default function productReducer(state = [], action){
    switch(action.type) {        
        case types.LOAD_PRODUCT_SUCCESS:
            return action.products;     
        default:
            return state;    
    }
}