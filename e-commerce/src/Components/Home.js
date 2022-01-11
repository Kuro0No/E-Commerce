import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../data/producstData/productContext'
import '../scss/Home.scss'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from './CartContext'
import GlobalTitle from './GlobalTitle'
import SliderBanner from './SliderBanner'
import DataBaner from '../data/DataBanner/Databaner'


const Home = () => {
    const products = useContext(ProductContext)
    const { shopingCart } = useContext(CartContext)




    return (
        <GlobalTitle   title="Trang chủ">
            
            <SliderBanner  data={DataBaner}/>

            <div className='container '>
                <div className='row imgProductHome row-cols-4 row-cols-md-4 g-4'>
                    {products.products.map((product, index) => (
                        <div key={index} className='col-lg-3 col-sm-6 productGroup'>
                            <Link active to={`/product/${product.id}/${product.name}`} className="card p-0" key={index}>
                                <img src={product.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text text-description">{product.description}</p>
                                    <p className="card-text">{product.cost}$</p>

                                    <div className='d-grid gap-2'>
                                        <button type="button" className="btn btn-success">Mua sản phẩm</button>
                                    </div>
                                </div>
                            </Link >
                        </div>
                    ))}
                </div>
            </div>
            
            
                
        </GlobalTitle>

    )
}

export default Home
