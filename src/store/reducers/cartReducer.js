import * as Actions from "../actions/cartAction";

const initialState = {
    cart: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.ADD_PRODUCT_TO_CARD:
            let temCart = [...state.cart];
            temCart.push(action.payload);
            return { ...state, cart: temCart };

        default:
            return state;
    }
};

export default cartReducer;