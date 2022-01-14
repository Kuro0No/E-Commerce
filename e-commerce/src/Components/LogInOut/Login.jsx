import React, { useState } from 'react'
import { ToastContent } from 'react-toastify'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import '../../scss/Login.scss'
import { useRef } from 'react'

const Login = () => {

    const inputRef = useRef(null)
    const [eye, setEye] = useState('fa-eye-slash')

    const eyeSlash =() => {
        eye === 'fa-eye-slash'? setEye('fa-eye') : setEye('fa-eye-slash')
        eye === 'fa-eye-slash' ? inputRef.current.setAttribute('type', 'text') : inputRef.current.setAttribute('type', 'password')
    }
    


    return (
        <div className='container'>
            <form className='m-auto loginForm' >
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Tên đăng nhập</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Mật khẩu</label>
                    <div className="fieldPassword">

                        <input ref={inputRef} type="password" className="form-control" id="exampleInputPassword1" />
                        <i  onClick={eyeSlash} className={`far ${eye}`}></i>
                    </div>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label  className="form-check-label" for="exampleCheck1">Ghi nhớ</label>
                </div>
                <button type="submit" className="btn btn-primary">Đăng nhập</button>
            </form>
        </div>
    )
}

export default Login
