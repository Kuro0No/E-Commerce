import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react/cjs/react.development'
import {Link, useParams} from 'react-router-dom'
import Paginations from './Pagination'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(async () => {
    async function FetchData() {
      const res = await axios.get('https://fakestoreapi.com/products?limit=20')
      setProducts(res.data)
      return res
    }
    FetchData()
  }, [])
  console.log(products)
  const {name} = useParams()

  return (
    <div className='container'>
      <div>1</div>
      <div className='row'>
        
        {products.map((product, index) => (
          <Link active to={`/product/${product.id}/${product.name}`} key={index} className="card mx-2 p-0" >
            <div className="col">
              <div className="card">
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">{product.price}$</p>
                </div>
              </div>
            </div>
          </Link >
        ))}
      </div>
    </div>
  )
}

export default Products
