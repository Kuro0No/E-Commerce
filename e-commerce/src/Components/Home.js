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
                    <Link to='product' className="col-4 px-3">

                        <img src={product.img} />
                        <div >{product.name}</div>
                    </Link>
                
                ))}
            </div>
        </div>
       
    )
}

export default Home
