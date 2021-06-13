import productsData from "../products";
import { DELETE_PRODUCT } from "./actions";

const initialState = {
  products: productsData,
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
     return {
        ...state,
        products : state.products.filter(product=> product.id !== action.payload.productId)
        
        

}
    default:
      return state;
  }
};

export default reducer;