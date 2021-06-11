// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { DetailWrapper } from "../styles";
import { Redirect, useParams } from "react-router";

const ProductDetail = (props) => {
  const productSlug = useParams().productSlug
const product= props.products.find(p => p.slug === productSlug)
if(!product) return <Redirect to="/" />
  return (
    <DetailWrapper>
      <p>Back to Products</p>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <DeleteButton
        productId={product.id}
        deleteProduct={props.deleteProduct}
      />
    </DetailWrapper>
  );
};

export default ProductDetail;
