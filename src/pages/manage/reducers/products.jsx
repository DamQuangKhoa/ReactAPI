import { FETCH_PRODUCTS } from "../constants/actionType";

const initialState = [
    {
        id: 100,
        name: 'Iphone 6s Plus',
        price: 5000,
        status: false,
    },{
        id: 100,
        name: 'Samsung Galaxy',
        price: 5000,
        status: false,
    },{
        id: 100,
        name: 'Iphone 9',
        price: 5000,
        status: false,
    }
]

const products = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            state = action.products
            return [...state]

        default:
            return [...state]
    }
}
export default products