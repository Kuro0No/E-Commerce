import React from 'react'
import { ProductContext } from '../data/producstData/productContext'
import { useContext } from 'react'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'
import '../scss/Cart.scss'

const Cart = () => {
    const { shopingCart, qty, totalCost, dispatch } = useContext(CartContext)
   
    
    return (
        <div className='container'>

            
                <table className="table">
                    <thead>
                        <tr>
                            <th className='text-center' scope="col">#</th>
                            <th className='text-center' scope="col">Sản phẩm trong giỏ hàng</th>
                            <th className='text-center' scope="col">Số lượng</th>
                            <th className='text-center' scope="col">Giá sản phẩm</th>
                            <th className='text-center' scope="col">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                    {shopingCart.length > 0 ?
                        shopingCart.map((cart,index) => {                        
                        
                            return( <tr key={index}>
                                <th className='text-center positionCenter' scope="row">{index +1}</th>
                                <td className='fs-5'><img  src={cart[0].img} className="img-thumbnail imgProductCart " alt="..." /> {cart[0].name}</td>
                                <td className='text-center positionCenter fs-5'>
                                    
                                    <button  className="btn btn-outline-primary btn-sm mx-3 " onClick={() => dispatch({type: 'PLUS_PRODUCT', id: cart[0].id, cart})}><i className="fas fa-plus p-0"></i></button>
                                    {cart.qty}
                                    <button className="btn btn-outline-danger btn-sm  mx-3"><i className="fas fa-minus p-0"></i></button>

                                    </td>
                                <td className='text-center positionCenter fs-5'>{cart[0].cost}$</td>
                                <td className='text-center positionCenter'>
                                <button type="button" className="btn btn-primary me-2 ">Mua </button>
                                <button type="button" className="btn btn-danger me-2" onClick={() => dispatch({type: "DELETE_CART", id:cart[0].id})}>Xóa </button>
                                </td>
                            </tr>
                            
                        )})
                : <tr>
                    <td colSpan='5'  className='text-center p-4 fs-5 '>Không có sản phẩm trong giỏ hàng của bạn.
                        <Link to='/products' className='link-primary'>Mua sản phẩm?</Link>
                    </td>
                </tr> }
                    </tbody>
                </table>

        </div>
    )
}

export default Cart
