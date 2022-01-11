import React from 'react'
import logo from '../resources/img/logo.png'
import '../scss/Navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import { CartContext } from './CartContext'
import { useContext } from 'react/cjs/react.development'



const Navbar = () => {

    const { shopingCart } = useContext(CartContext)
    


    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>
                        <img src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink active={'true'} className="nav-link" aria-current="page" to="/" >Trang chủ</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink active={'true'} className="nav-link" to="/products" >Sản phẩm</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink active={'true'} className="nav-link" to="/contact" >Liên hệ</NavLink>
                            </li>


                        </ul>
                        <div className="d-flex nav-search">
                            <input className="form-control me-2" type="search" placeholder="Tìm kiếm sản phẩm" aria-label="Search" />
                            <i className="bi bi-search btn btn-outline-success"></i>
                            
                        </div>
                        <ul className="navbar-nav ">
                            <li className="nav-item">

                                <Link to='/cart' className=" position-relative">

                                    <i className="bi bi-cart3"></i>
                                    {shopingCart.length > 0 ?
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            {shopingCart.length}
                                            <span className="visually-hidden">unread messages</span>
                                        </span>
                                        : undefined
                                    }
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link to='/user'>
                                    <i className="far fa-user"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <div className='navLeft'>
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
            </div> */}
        </div>
    )
}

export default Navbar
