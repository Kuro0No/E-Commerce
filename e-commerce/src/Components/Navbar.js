import React from 'react'
import logo from '../resources/img/logo.png'
import '../scss/Navbar.scss'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='container'>
            <div className='navLeft'>
                <Link to='/'>
                    <img src={logo} />
                </Link>
            </div>
            <div className='navCenter1'>
                    <ul>
                        <li>
                            <Link to="/">Trang chủ</Link>
                            <Link to="/products">Sản phẩm</Link>
                            <Link to="/contact">Liên hệ</Link>
                        </li>
                    </ul>
            </div>
            <div className='navCenter2'>
                <input placeholder='Tìm kiếm' type='search' />
            </div>
            <div className='navRight'>
                <Link to='/cart'>
                    <i className="fas fa-shopping-cart"></i>
                </Link>

                <i className="far fa-user"></i>
            </div>
        </div>
    )
}

export default Navbar
