import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../data/producstData/productContext'
import '../scss/Home.scss'
import { Link } from 'react-router-dom'

const Home = () => {
    const products = useContext(ProductContext)
    console.log(products)
    
    return (
        <div className='container'>
            <div className='row'>
                {products.products.map((product,index) =>(
                    <Link to={`/product/${product.name}`} key={index} className="col-4 px-3">

                        <img src={product.img} />
                        <div >{product.name}</div>
                        <div className='d-grid gap-2'>

                        <button type="button" className="btn btn-success">Thêm vào giỏ hàng</button>
                        </div>
                    </Link>
                
                ))}
            </div>
        </div>
       
    )
}

export default Home
