import React, { useContext } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from '../data/producstData/productContext'
import { useState } from 'react'
import '../scss/Detail.scss'
import { CartContext } from './CartContext'





const DetailProduct = () => {
    const { id, name } = useParams()
    const products = useContext(ProductContext)
    // const product = products.products.filter(item => item.id == id)
    let [product] = useState(products.products.filter(item => item.id == id))
    const {dispatch} = useContext(CartContext)
    const {qty} = useContext(CartContext)
    
  



    return (
        <div className='container containerDetail'>

            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={product[0].img} className="img-fluid rounded-start imgProduct" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{product[0].name}</h5>
                            <p className="card-text">Giá: {product[0].cost}</p>
                            <p className="card-text">{product[0].description}</p>
                            <button  type="button" className="btn btn-primary">Mua</button>
                            <button type="button" onClick={() => dispatch({type: 'ADD_CART', id:product[0].id, product})} className="btn btn-info Btn2nd">Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct
