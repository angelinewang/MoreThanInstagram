import {React, useState, useEffect} from 'react';
import './DetailPage.css';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

function DetailPage() {

    const [product, setProduct] = useState([])
    const [seller, setSeller] = useState("")
    const [created, setCreated] = useState("")

    let productId = useParams().id

    useEffect(() => {
        fetchProduct()
     }, [])
 
     let fetchProduct = () => {
         axios.get(`/api/products/${productId}`)
         .then((res) => {
               setProduct(res.data) // for Axios
               // setTweets(res)
               setSeller(res.data.seller.name)
            //  setCreated(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(res.data.createdAt))
         })
     }
    
    return (
        <div className="detail-container">
            <Link to={`/`}>
                <button>Back Home</button>
            </Link>
        {
        product ? (
  
            <article className="message is-link" key={product._id}>
                  <div className="message-header">
                <p>Name: {product.name}</p>
                <div className="buttons-container">
                </div>
            </div>
                <div className="message-body">
                  <p>Description: {product.description}</p>
                  <img src={product.image} alt={product.name}/>
                  <p>Category: {product.category}</p>
                  <p>Quantity Remaining: {product.quantity}</p>
                  <p>Price: £{product.price}</p>
                  <p>Seller: {seller}</p>
                </div>
         
                <p className="created-date">Posted at: {product.createdAt}</p>
                <p className="updated-date">Updated at: {product.updatedAt}</p>
            </article>
    
                ) : null
        }
    </div>)
};

export default DetailPage