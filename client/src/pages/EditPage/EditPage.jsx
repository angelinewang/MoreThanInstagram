import {React, useState, useEffect} from 'react';
import './EditPage.css';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import TokenService from '../../utils/tokenService.js'

function EditPage() {
  const [product, setProduct] = useState([])

    let productId = useParams().id

    let navigate = useNavigate()

    useEffect(() => {
        fetchMyProduct()
     }, [])
 
     let fetchMyProduct = () => {
         axios.get(`/api/products/${productId}`)
         .then((res) => {
             setProduct(res.data) // for Axios
             // setTweets(res)
         });
     }

     let handleChange = (e) => {
      setProduct({...product, [e.target.name]: e.target.value})
  }

  let handleSubmit = (e) => {
     e.preventDefault()
     let token = TokenService.getToken()
     console.log('form was submitted!')
     axios.patch(`/api/products/${productId}`, {...product}, {headers: {
        'Authorization': `Bearer ${token}` 
      }})
     .then((res) => {
      console.log(res.data)
      navigate(`/myproducts`)
     })
  }
    return (
      <div>
       { product ?  (<div className="form-container">
           <form onSubmit={handleSubmit} className="form-body">
           <label>Name</label>
            <input className="name-input" name="name" value={product.name} onChange={handleChange}></input>
     
            <label>Description</label>
            <textarea className="description-input" name="description" value={product.description} onChange={handleChange}></textarea>
       
            <label>Category</label>
            <input className="category-input" name="category" value={product.category} onChange={handleChange}></input>

            <label>Quantity Remaining</label>
            <input className="quantity-input" name="quantity" value={product.quantity} onChange={handleChange}></input>

            <label>Price</label>
            <input className="price-input" name="price" value={product.price} onChange={handleChange}></input>

            <button type="Submit" value="Update Product">Update Product</button>
            </form>
        </div> ): null }
    </div>
  )
};

export default EditPage