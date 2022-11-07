import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = (props) => {

    const [data, setData] = useState([]);
    const [random, setRandom] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setData(json))
    })
    /*var item = data[Math.floor(Math.random()*data.length)];
    setRandom(item);
    console.log(random);*/
    return (
        <div className="ui link cards">
            {data.map(data => {
                return (
                    <Link to="/product">
                        <div key={data.id} className="ui card"  style={{height:300, margin:35}} onClick={(e) => { props.Click(data) }}>
                            <div className="ui tiny images">
                                <img className="ui medium image" style={{height:150, }} src={data.image} alt={data.description} />
                            </div>
                            <div className="ui content">
                                <div className="ui header">{data.title}</div>
                                <div className="meta">
                                    {data.category}
                                </div>
                                <div className="description">
                                    ${data.price}
                                </div>
                            </div>
                        </div>
                    </Link>
                );
            })}
      
        </div>
    )
                
}
export default HomePage;