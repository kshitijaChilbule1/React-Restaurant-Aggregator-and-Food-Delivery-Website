import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

// const Product = () => {
//   const product = products.find((p) => p.id === (id))
//   return(
//     <div>
//       <img src={product.image} alt={product.name} />
//       <h3>product.name</h3>
// </div>
//   )
// }
// export default Product;

const Product = () => {
  const[product,setProduct]=useState([]);
  const { id } = useParams();
  useEffect(()=>{
    async function fetchProduct(){
         const {data}= await axios.get('https://my-json-server.typicode.com/kshitijaChilbule1/demo/restaurant/'+id)
         setProduct(data)
     }
     fetchProduct()
 },[]);
  return (
    <div className='details'>
       <div>
          <img src={product.img} alt="" style={{height:"300px", width:'300px', marginBottom:'15px'}}/>
       </div>
       <div className="description">
       <h3 style={{fontSize:'25px', fontWeight:'800'}}>{product.name}</h3>
				<p>⭐⭐⭐⭐⭐{product.rating}</p>
				<p>EMAIL: {product.email}</p>
				<p>ADDRESS: {product.address}</p>
       </div>
       <div className='back'>
        <Link to='/menu'>FEATURED PRODUCTS</Link>
      </div>
    </div>
  )
}

export default Product
