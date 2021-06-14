import productsData from "../products";
import { ADD_PRODUCT, DELETE_PRODUCT , UPDATE_PRODUCT} from "./actions";
import slugify from "slugify"

const initialState = {
  products: productsData,

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
       return {
            ...state,
            products : state.products.filter(product=> product.id !== action.payload.productId)
            }
  case ADD_PRODUCT:
    const newProduct= action.payload.newProduct
    newProduct.id = state.products[state.products.length -1].id + 1;
    newProduct.slug = slugify(newProduct.name);
       return {
          ...state,
          products: [...state.products, newProduct],
        }
        case UPDATE_PRODUCT:
          action.payload.updatedProduct.slug = slugify(
            action.payload.updatedProduct.name
          );
    
          return {
            ...state,
            products: state.products.map((product) =>
              product.id === action.payload.updatedProduct.id
                ? action.payload.updatedProduct
                : product
            ),
          };

    default:
      return state;
  }
};

export default reducer;