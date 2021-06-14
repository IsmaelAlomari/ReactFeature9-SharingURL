// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { ProductWrapper } from "../styles";
import { Link } from "react-router-dom";
import {deleteProduct} from "../store/actions"
import { useDispatch } from "react-redux";
import { BsList } from "react-icons/bs"

const ProductItem = (props) => {
  const product = props.product;
  const dispatch = useDispatch()
  return (
    <ProductWrapper>
      <img
        alt={product.name}
        src={product.image}
      />
      <p>{product.name}</p>
      <p className="product-price">{product.price} JD</p>
      <DeleteButton  class="btn btn-primary" 
        deleteProduct={()=> dispatch(deleteProduct(product.id))}
      />
      <Link   to={`./products/${product.slug}`}>      More Details </Link>
      <BsList />
    </ProductWrapper>
  );
};

export default ProductItem;
