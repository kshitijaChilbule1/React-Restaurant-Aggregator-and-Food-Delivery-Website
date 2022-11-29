import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/RestaurantList.css';


const List = () => {
  const [products, setProducts] = useState([]);
useEffect(() => {
    fetchProducts();
  }, []);
const fetchProducts = () => {
    axios
      .get('https://my-json-server.typicode.com/kshitijaChilbule1/demo/restaurant')
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
return (
    <div>
      <h1 style={{fontSize:'30px', padding:'50px'}}><b>Order food online</b></h1>
      <div className='item-container'>
        {products.map((product) => (
          <div className='card' key={product.id}>
            <img src={product.img} alt="" style={{height:"150px", marginBottom:'15px'}}/>
            <h3 style={{fontSize:'25px', fontWeight:'800'}}>{product.name}</h3>
				<p>⭐⭐⭐⭐⭐{product.rating}</p>
				<p>EMAIL: {product.email}</p>
				<p>ADDRESS: {product.address}</p>
            <Link to={`/product/${product.id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default List;