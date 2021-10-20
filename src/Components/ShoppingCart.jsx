import React from 'react'
import { useReducer } from 'react'
import { TYPES } from '../Actions/ShoppingActions'
import { ShoppingInitialState, ShoppingReducer } from '../Reducers/ShoppingReducers'
import CartItem from './CartItem'
import ProductItem from './ProductItem'

const ShoppingCart = () => {

const [state, dispatch] = useReducer(ShoppingReducer, ShoppingInitialState)

const{products,cart} = state;

const AddToCart = (id) =>{
/* console.log(id) */
dispatch({type:TYPES.ADD_TO_CART,payload:id})
}
const DelFromCart = (id,all=false) =>{
console.log(id,all);
if (all) {
    dispatch({type:TYPES.REMOVE_ALL_FROM_CART,payload:id})
}else{
    dispatch({type:TYPES.REMOVE_ONE_FROM_CART,payload:id})
}
}
const ClearCart = () =>{
dispatch({type:TYPES.CLEAR_CART})
}


    return (
        <div>
            <h2>Carrito de compras</h2>
            <h3>Productos</h3>
            <article className="box grid-responsive">
                {products.map((product)=>(<ProductItem key={product.id} data={product}AddToCart={AddToCart}/>))}
            </article>
            <h3>Carrito</h3>
            <article className="box">
                <button onClick={ClearCart}>Limpiar carrito</button>
                {
                    cart.map((item, index) => (<CartItem key={index} data={item} DelFromCart={DelFromCart}/>))
                }
            </article>
        </div>
    )
}

export default ShoppingCart
