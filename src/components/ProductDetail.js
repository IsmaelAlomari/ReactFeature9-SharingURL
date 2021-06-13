// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { DetailWrapper } from "../styles";
import { Redirect, useParams } from "react-router";
import {Helmet} from "react-helmet"
import { useSelector } from "react-redux";
import {deleteProduct} from "../store/actions"
import { useDispatch } from "react-redux";

const ProductDetail = () => {
  const productSlug = useParams().productSlug
  const products= useSelector(state => state.products)
  const dispatch = useDispatch()
const product= products.find(p => p.slug === productSlug)
if(!product) return <Redirect to="/" />
  return (
    <DetailWrapper>
      <Helmet>
      <h2>{product.name}</h2>
      </Helmet>
      <p>Back to Products</p>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <DeleteButton
       
        deleteProduct={() => dispatch(deleteProduct(product.id))}
      />
    </DetailWrapper>
  );
};

export default ProductDetail;
