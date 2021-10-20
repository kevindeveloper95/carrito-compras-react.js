import React from 'react'


const ProductItem = ({data, AddToCart}) => {
let {id,name,price} = data;



    return (
        <div style={{border:'thin solid gray', padding:"1rem"}}>
            <h4>{name}</h4>
            <h5>{price}</h5>
            <button onClick={()=>AddToCart(id)}>Agregar</button>
        </div>
    )
}




export default ProductItem
