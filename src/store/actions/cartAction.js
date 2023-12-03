export const ADD_PRODUCT_TO_CARD = 'ADD_PRODUCT_TO_CARD';

export const addProductToCart = cartProduct => {
    return {
        type: ADD_PRODUCT_TO_CARD,
        payload: cartProduct,
    }
}