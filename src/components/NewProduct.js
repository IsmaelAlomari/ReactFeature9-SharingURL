import React, { useState } from "react"
import {addProduct , updateProduct } from "../store/actions"
import { useDispatch } from "react-redux"
import { useHistory ,useParams } from "react-router"
import { useSelector } from "react-redux";

  const AddProduct= () => {
 
  const dispatch = useDispatch()
  const history = useHistory()
  let productSlug = useParams().productSlug;

  const products = useSelector((state) => state.products);

  const newProduct = {
    name: "",
    url: "",
    price: "",
    description: "",
  };

  const editedProduct = products.find(
    (product) => product.slug === productSlug
  );

  const [product, setProduct] = useState(
    editedProduct ? editedProduct : newProduct
  );

  const resetForm = () => {
    setProduct({
      id: "",
      name: "",
      slug: "",
      price: "",
      description: "",
      image:"",
    });
  };




  const handleChange = (event) => {
     
    setProduct({...product,[event.target.name] : event.target.value})
 }
  const handleSubmit = (event) => {
     event.preventDefault();
     dispatch(addProduct(product))
    
    };
  
    editedProduct
      ? dispatch(updateProduct(product))
      : dispatch(addProduct(product));

      resetForm();
    history.push("/products");
  


    return (
        
  <form onSubmit={handleSubmit}>
        <div class="form-group">
          <input onChange={handleChange} type="text" className="form-control" name="name"  placeholder="Enter Cookie Name here"/>
        </div>
        <div class="form-group">
          <input onChange={handleChange} type="number" className="form-control" name="price" placeholder="Enter Cookie Price here"/>
        </div>
        <div class="form-group">
          <input onChange={handleChange} type="text" className="form-control" name="description" placeholder="Enter Cookie description here"/>
        </div>
        <div class="form-group">
          <input onChange={handleChange} type="text" className="form-control" name="image" placeholder="Upload Cookie image by adding url here "/>
        </div>
        <button type="submit" className="btn btn-dark">Submit</button>
</form>
     
  
    )
}

export default AddProduct