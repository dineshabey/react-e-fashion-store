import axios from "axios";
export const FETCH_PRODUCT_DATA_BEGIN = 'FETCH_PRODUCT_DATA_BEGIN';
export const FETCH_PRODUCT_DATA_SUCCESS = 'FETCH_PRODUCT_DATA_SUCCESS';
export const FETCH_PRODUCT_DATA_FALIURE = 'FETCH_PRODUCT_DATA_FALIURE';

export const fetchProductData = () => {

    return dispatch => {
        dispatch({
            type: FETCH_PRODUCT_DATA_BEGIN,
        });
        axios.get('https://cdn.radikadilanka.com:9000/getProducts').then((response) => {
            dispatch({
                type: FETCH_PRODUCT_DATA_SUCCESS,
                payload: response.data,
            })
        }).catch((e) => {
            dispatch({
                type: FETCH_PRODUCT_DATA_FALIURE,
                payload: [e.message],
            })
        })
    };


};
