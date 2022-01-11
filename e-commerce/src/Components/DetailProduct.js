import React, { useContext } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from '../data/producstData/productContext'
import { useState } from 'react'
import '../scss/Detail.scss'
import { CartContext } from './CartContext'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalTitle from './GlobalTitle'




const DetailProduct = () => {
    const { id, name } = useParams()
    const products = useContext(ProductContext)
    // const product = products.products.filter(item => item.id == id)
    
    const {dispatch} = useContext(CartContext)
    const {qty} = useContext(CartContext)
  

    let productDetail = products.products.find(item => item.id == id)


    return (
        <GlobalTitle className='container containerDetail' title={productDetail.name}>
            

            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={productDetail.img} className="img-fluid rounded-start imgProduct" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{productDetail.name}</h5>
                            <p className="card-text">Giá: {productDetail.cost}</p>
                            <p className="card-text">{productDetail.description}</p>
                            <button  type="button"  className="btn btn-primary buttonHandle">Mua</button>
                            <button type="button" onClick={() => { 
                                    
                                return dispatch({type: 'ADD_CART', id:productDetail.id, product:productDetail })}
                            }
                                className="btn btn-info Btn2nd buttonHandle">Thêm vào giỏ hàng</button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
            
        </GlobalTitle>
    )
}

export default DetailProduct
