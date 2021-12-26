import { createContext } from 'react'

import { useState } from 'react'
import product1 from '../img/1.jpg'
import product2 from '../img/2.jpg'
import product3 from '../img/3.jpg'
import product4 from '../img/4.jpg'
import product5 from '../img/5.jpg'
import product6 from '../img/6.jpg'
import product7 from '../img/7.jpg' 
import product8 from '../img/8.png'

export const ProductContext = createContext()

export const ProductContextProvider = (props) => {
    const [products] = useState([
        {name:"Sản phẩm 1", description:'Miêu tả 1', cost: 10, img: product1 },
        {name:"Sản phẩm 2", description:'Miêu tả 2', cost: 10, img: product2 },
        {name:"Sản phẩm 3", description:'Miêu tả 3', cost: 10 , img: product3},
        {name:"Sản phẩm 4", description:'Miêu tả 4', cost: 10 , img: product4},
        {name:"Sản phẩm 5", description:'Miêu tả 5', cost: 10, img: product5},
        {name:"Sản phẩm 6", description:'Miêu tả 6', cost: 10, img: product6 },
        {name:"Sản phẩm 7", description:'Miêu tả 7', cost: 10 , img: product7},
        {name:"Sản phẩm 8", description:'Miêu tả 8', cost: 10 , img: product8},
    ])


    return(
        <ProductContext.Provider value={{products: [...products] }}>
            {props.children}
        </ProductContext.Provider>
    )
}
export default ProductContextProvider
   
