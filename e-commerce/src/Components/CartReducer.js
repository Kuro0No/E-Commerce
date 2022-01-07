export const CartReducer = (state,action)=>{

    const {shopingCart, qty, totalCost} = state

    let product;
    let index;
    let upDateQty;
    let updateCost

    switch (action.type) {
        case 'ADD_CART':
            const check = shopingCart.find(product=> product.id === action.id)
            if(check) {
                return state
            } else{
                product = action.product
                product['qty'] = 1
                upDateQty = qty + 1
                updateCost = totalCost + product[0].cost;
                
                
                return {shopingCart: [product, ...shopingCart], totalCost: updateCost, qty: upDateQty}

            }
            break;
        case 'PLUS_PRODUCT':
            product= action.cart
            product['qty'] = 1
            
            product.qty = product.qty +1
            updateCost = totalCost + product.cost
            upDateQty = qty + product.qty
            index = shopingCart.findIndex(cart => cart.id === action.id)
            shopingCart[index]=action.cart
            
            return {shopingCart: [...shopingCart], qty:  upDateQty }
            break;
            case 'DELETE_CART':
                   const filterd = shopingCart.filter((product,index) => product.id  !== action.id) 
                   console.log([...filterd] )   
                    return {shopingCart: [...filterd]}
                break;
        
    
        default:
            break;
    }

}