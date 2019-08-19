import * as types from "./actionTypes";
import * as apiCalls from "../../apiCalls";

export function loadProductSuccess(products) {
    return { type: types.LOAD_PRODUCT_SUCCESS, products };
}

export function loadProducts() {
    return function(dispatch) {
        return apiCalls
        .getProducts()
        .then(products => {
            dispatch(loadProductSuccess(products.data));
        })
        .catch(error => {
            throw error;
        });
    };
}
