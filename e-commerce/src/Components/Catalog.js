import React, { useContext } from 'react'
import { ProductContext } from '../data/producstData/productContext'

const Catalog = () => {
    const colors = ['Trắng', 'Đen', 'Vàng']
    const sizes = ['S', 'M', 'L']
    const initFilter = {
        color: [],
        size: []
    }
    const products = useContext(ProductContext)

    return (
        
            <div className='col-3'>
                <div>

                    <h4>Màu sắc</h4>
                    {colors.map((color, index) => (
                        <div className="form-check" key={index}>
                            <input className="form-check-input" type="checkbox" value="" id={`flexCheckDefault${index}`} />
                            <label className="form-check-label" htmlFor={`flexCheckDefault${index}`}>
                                {color}
                            </label>
                        </div>
                    ))}
                </div>
                <div>
                    <h4>Kích thước</h4>
                    {sizes.map((size, index) => (
                        <div className="form-check" key={index}>
                            <input className="form-check-input" type="checkbox" value="" id={`flexCheckDefaultSize${index}`} />
                            <label className="form-check-label" htmlFor={`flexCheckDefaultSize${index}`}>
                                {size}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        
    )
}

export default Catalog
