import React from 'react'

const CartItem = ({data,DelFromCart}) => {
    let {id,name,price, quantity} = data;
    return (
        <div style={{borderBottom: "thin solid gray"}}>
            <h4>{name}</h4>
            <h5>${price}.00 x {quantity} = ${price*quantity}.00</h5>
            <button onClick={()=>DelFromCart(id)}>Eliminar</button>
            <button onClick={()=>DelFromCart(id,true)}>Eliminar todos</button>
        </div>
    )
}

export default CartItem
