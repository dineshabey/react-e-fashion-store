import * as Actions from "../actions/productAction";
const initiaState = {
    productDataLoadingStatus: 'notStarted',
    productList: [],
};
const productReducer = (state = initiaState, action) => {
    switch (action.type) {
        case Actions.FETCH_PRODUCT_DATA_BEGIN:
            return {
                ...state,
                productDataLoadingStatus: 'loading',
            };
        case Actions.FETCH_PRODUCT_DATA_SUCCESS:
            return {
                ...state,
                productDataLoadingStatus: 'completed',
                productList: action.payload,
            };
        case Actions.FETCH_PRODUCT_DATA_FALIURE:
            return {
                ...state,
                productDataLoadingStatus: 'failed',
                productList: [],

            };
        case Actions.ASSIGN_UPDATED_PRODUCT_LIST:
            return {
                ...state,
                // productDataLoadingStatus: 'failed',
                productList: [...action.payload],

            };
        default:
            return state;
    }
}
export default productReducer;