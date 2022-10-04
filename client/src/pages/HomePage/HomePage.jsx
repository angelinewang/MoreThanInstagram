import React, {useEffect, useState} from 'react'
import './HomePage.css'
import axios  from 'axios'
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import {Link} from 'react-router-dom'
// import TokenService from '../../utils/tokenService.js'

// Can use axios
function HomePage() {

    // const MySwal = withReactContent(Swal)
    const [products, setProducts] = useState([])
    const [user, setUser] = useState({})
    useEffect(() => {
        // let user = TokenService.getUserFromToken(user)
        // setUser(user)
        fetchProducts()
    }, [])

    let fetchProducts = () => {
        axios.get("/api/products")
        .then((res) => {
            setProducts(res.data) // for Axios
            // setTweets(res)
        });
    }

    // let deleteProduct= (id) => {
    //     axios.delete(`/tweets/${id}`)
    //     .then(res => console.log(res.data)) 
    //     .then(() =>  {MySwal.fire({
    //             title: <strong>Tweet Deleted!</strong>,
    //             html: <i>Your tweet was deleted</i>,
    //             icon: 'success'
    //         })
    //     })
    //     .then(() => {fetchTweets()})
    // }

  return (
    <div className="product-container">
        <h1 className="title">Products</h1>
        {products.map((product, idx) => (
            product ? (
    
        <article className="message is-link" key={product._id}>
            <div className="message-header">
                <p>Name: {product.name}</p>
                <div className="buttons-container">
                <Link to={`/detail/${product._id}`}>
                <button>Details</button>
                </Link>
                </div>
            </div>
                <div className="message-body">
                  <p>Description: {product.description}</p>
                  <img src={product.image} alt={product.name}/>
                  <p>Category: {product.category}</p>
                  <p>Quantity Remaining: {product.quantity}</p>
                  <p>Price: £{product.price}</p>
                  <p>Seller: {product.seller.name}</p>
                </div>
                <p className="created-date">Posted at: {product.createdAt}</p>
                <p className="updated-date">Posted at: {product.updatedAt}</p>
        </article>
        
            ) : null
        ))}
    </div>
  )
}

export default HomePage