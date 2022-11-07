import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const SideBar = (props) => {
    const [categories, setCategories] = useState([]);
  

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json))
      }, [props])
    


    return (
        <div className="ui vertical pointing menu">
            <Link to="/" className="item">Tüm Kategoriler</Link>
            {categories.map(data => {
                return(
                 <Link key={data.id} to="/products" className="item" onClick={(e) =>{props.handleChange(data)}}>
                   {data}
                 </Link>
                
                )
            })}
           
        </div>
    );
};

export default SideBar;