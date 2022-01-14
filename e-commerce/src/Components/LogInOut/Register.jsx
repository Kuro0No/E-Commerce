import React from 'react'
import { ToastContainer } from 'react-toastify'
import {toast} from 'react-toastify'

const Register = () => {
    return (
        <div >
            <h2 className='container'>Đăng kí</h2>
            <form class="row g-3 container m-auto" onClick={(e) => e.preventDefault()}>
                <div class="col-md-12">
                    <label for="inputAccount4" class="form-label">Tên đăng nhập</label>
                    <input type="account" class="form-control" id="inputAccount4" />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Mật khẩu</label>
                    <input type="password" class="form-control" id="inputPassword4"/>
                </div>
                <div class="col-md-6">
                    <label for="inputRePassword4" class="form-label">Nhập lại mật khẩu</label>
                    <input type="password" class="form-control" id="inputRePassword4"/>
                </div>
                
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Địa chỉ</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Địa chỉ của bạn"/>
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">Thành phố</label>
                    <input type="text" class="form-control" id="inputCity"/>
                </div>
                <div class="col-md-6">
                    <label for="inputState" class="form-label">Giới tính</label>
                    <select id="inputState" class="form-select">
                        <option >Giới tính</option>
                        <option>Nam</option>
                        <option>Nữ</option>
                    </select>
                </div>
                
                <div class="col-12">
                    <button onClick={() => toast.success('Đăng kí tài khoản thành công!', {autoClose: 2000})} type="submit" class="btn btn-primary">Đăng kí</button>
                </div>
                <ToastContainer/>
            </form>
        </div>
    )
}

export default Register
