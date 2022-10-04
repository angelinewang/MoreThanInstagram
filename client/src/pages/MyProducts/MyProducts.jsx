import './MyProducts.css';
import {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import axios  from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import TokenService from '../../utils/tokenService.js'

function MyProducts() {

    const MySwal = withReactContent(Swal)
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchMyProducts()

    }, [])

    let fetchMyProducts = () => {

        let user = TokenService.getUserFromToken()

        let userId = user._id
        axios.get('/api/products')
        .then((res) => {
            setProducts(res.data.filter((product) => product.seller._id == userId)) 
            // console.log(products)
        });
    }
    console.log(products)

    let deleteProduct = (id) => {
        let token = TokenService.getToken()
        axios.delete(`api/products/${id}`,{headers: {
            'Authorization': `Bearer ${token}` 
          }})
        .then(res => console.log(res.data)) 
        .then(() =>  {MySwal.fire({
                title: <strong>Product Deleted!</strong>,
                html: <i>Your product was deleted</i>,
                icon: 'success'
            })
        })
        .then(() => {fetchMyProducts()})
    }

    return (
<div className="product-container">
            <h1>My Products</h1>
            <Link to="/create">
            <h2>Add Product</h2>
            </Link>
    {products.map((product, idx) => (
        product ? (
            <article className="message is-link" key={product._id}>
            <div className="message-header">
                <p>Name: {product.name}</p>
                <div className="buttons-container">
                <Link to={`/edit/${product._id}`}>
                <button>Edit</button>
                </Link>
                <button className="delete" aria-label="delete" onClick={() => {deleteProduct(product._id)}}></button>
                </div>
            </div>
                <div className="message-body">
                  <p>Description: {product.description}</p>
                  <img src={product.image} alt={product.name}/>
                  <p>Category: {product.category}</p>
                  <p>Quantity Remaining: {product.quantity}</p>
                  <p>Price: £{product.price}</p>
                </div>
                <p className="created-date">Posted at: {product.createdAt}</p>
                <p className="updated-date">Updated at: {product.updatedAt}</p>
        </article>
        ) : <div> No Product Yet!</div> 
    ))}

</div>
    )
} 

export default MyProducts;