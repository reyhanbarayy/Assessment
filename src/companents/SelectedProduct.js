import React, { useEffect, useState } from "react";

const SelectedProduct = (props) => {
   const [product, setProduct] = useState([])
   useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${props.selectedProduct.id}`)
         .then(res => res.json())
         .then(res => setProduct(res))
   }, [props])


   return (
      <div className="ui card" style={{height:350, width:600}}>
      <div className="image">
        {console.log(product)}
        <img className="ui massive image" src={product.image}/>
      </div>
      <div className="content">
        <a className="header">{product.title}</a>
        <div className="meta">
          <span className="date">{product.category}</span>
        </div>
        <div className="description">
        {product.price}
        </div>
      </div>
    </div>
   )
}
export default SelectedProduct;