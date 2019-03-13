import { FETCH_PRODUCTS } from "../constants/actionType";
import callAPI from "../../utils/api";
import { PRODUCTS } from "../../constants/config";

export const FetchProductsRequest = () => {
    return (dispatch) => {
        return callAPI(1, 'GET', null)
            .then(res => {
                console.log(res.data);
                
                dispatch(FetchProducts(res.data))
            })
    }
}
export const FetchProducts = (products) => {
    return {
        type: FETCH_PRODUCTS,
        products
    }
}