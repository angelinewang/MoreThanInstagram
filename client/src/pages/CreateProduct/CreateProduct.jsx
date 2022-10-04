import {React, useState, useEffect} from 'react';
import './CreateProduct.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import TokenService from '../../utils/tokenService.js'

function CreateProductPage() {

    const [product, setProduct] = useState({
    name: "",
    description: "",
    image: "",
    category: "",
    quantity: "",
    price: "",
    seller: `${TokenService.getUserFromToken()._id}`
    // seller: ""
    })

    let navigate = useNavigate()

    let handleChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

    let handleSubmit = (e) => {
       e.preventDefault()
       console.log('form was submitted!')
       let token = TokenService.getToken()
       console.log(token)
    //    let token = TokenService.getToken()
    //    console.log(token)
       axios.post('api/products', {...product},  {headers: {
        'Authorization': `Bearer ${token}` 
      }})
       .then((res) => {
        console.log(res.data)
        navigate(`/myproducts`)
       })
    }
return  (
    <div>
        <div className="form-container">
           <form onSubmit={handleSubmit} className="form-body">
           <label>Name</label>
            <input className="name-input" name="name" value={product.name} onChange={handleChange}></input>
     
            <label>Category</label>
            <input className="category-input" name="category" value={product.category} onChange={handleChange}></input>

            <label>Description</label>
            <textarea className="description-input" name="description" value={product.description} onChange={handleChange}></textarea>
       
            <label>Image URL</label>
            <input className="image-input" name="image" value={product.image} onChange={handleChange}></input>
       
            <label>Quantity Remaining</label>
            <input className="quantity-input" name="quantity" value={product.quantity} onChange={handleChange}></input>
       
            <label>Price</label>
            <input className="price-input" name="price" value={product.price} onChange={handleChange}></input>

            <button type="Submit" value="Create new Product!">Create New Product!</button>
            </form>
        </div>
    </div>
)
};

export default CreateProductPage