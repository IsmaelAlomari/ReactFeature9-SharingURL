// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { ProductWrapper } from "../styles";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <ProductWrapper>
      <img
        alt={product.name}
        src={product.image}
      />
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <DeleteButton
        productId={product.id}
        deleteProduct={props.deleteProduct}
      />
      <Link to={`./products/${product.slug}`}>More Details</Link>
    </ProductWrapper>
  );
};

export default ProductItem;
