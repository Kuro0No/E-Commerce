import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../data/producstData/productContext'
import '../scss/Home.scss'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const products = useContext(ProductContext)
    console.log(products)
    
    
    return (
        <div className='container '>
            <div className='row row-cols-1 row-cols-md-4 g-4'>
                {products.products.map((product,index) =>(
                    <>
                    <Link state={product} to={`/product/${product.id}/${product.name}`} key={index} className="col-4 px-3 ">

                        <img  src={product.img} />
                        <div >{product.name}</div>
                        <div >Giá: {product.cost}$</div>




                            <div className='d-grid gap-2'>
                                <button  type="button" className="btn btn-success">Mua sản phẩm</button>
                            </div>
                    </Link>
                    </>
                
                ))}
            </div>
        </div>
       
    )
}

export default Home
