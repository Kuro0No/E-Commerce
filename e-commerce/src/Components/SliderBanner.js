import React, { useState, useEffect } from 'react'
import '../scss/SliderBanner.scss'



const SliderBanner = (props) => {
    const data = props.data
    
    let [activeSlider, setActiveSlider] = useState(0)
    const nextSlider =() => {
        const index = activeSlider + 1 === data.length ? 0 : activeSlider +1
        setActiveSlider(index)
    }
    const prevSlider =() => {
        const index = activeSlider - 1 === data.length ? 0 : activeSlider - 1
        setActiveSlider(index)
    }
    const changeSlider = () => {
        nextSlider()
    }
    useEffect(() => {
        const auto = setTimeout(() => {
            setActiveSlider(activeSlider + 1 === data.length ? 0 : activeSlider +1)
        }, 3000)
        return () => clearTimeout(auto)
    }, [activeSlider])

    return (
        <div className='container position-relative'>

            {data.map((item, index) => (
                <SliderItem key={index} item={item} active={index === activeSlider} nextSlider={nextSlider} />
            ))}

        </div>
    )
}

const SliderItem = (props) => {


    
   return ( <div className={`container ${props.active ? 'activeSlider' : 'cloned'}`}>


        <div className="card mb-3" style={{ width: 100 + '%' }}>

            <div className="row g-0">
                <div className="col-md-8">
                    <i className="bi bi-chevron-left prevSlider" onClick={props.prevSlider}></i>

                    <div className="card-body">
                        <h3 className="card-title">{props.item.title}</h3>
                        <p className="card-text">{props.item.description}</p>
                        <button type="button" className="btn btn-outline-primary">Xem chi tiết</button>

                    </div>
                    <i className="bi bi-chevron-right nextSlider" onClick={props.nextSlider}></i>

                </div>
                <div className="col-md-4 ">
                    <img src={props.item.img} className="img-fluid rounded-start imgSlider" alt="..." />
                </div>

            </div>
        </div>



    </div>

)}

export default SliderBanner
