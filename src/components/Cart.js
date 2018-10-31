import React from 'react'
import CartItem from './CartItem';

const Cart = props => {

  const cartItemComponents = props.cartItems.map(cartItem => 
    <CartItem 
      key={cartItem.id}
      cartItem={cartItem}
      increaseQuantity={props.increaseQuantity}
      decreaseQuantity={props.decreaseQuantity}
      removeFromCart={props.removeFromCart}
    />
  )

  const cartTotal = () => {
    return props.cartItems.reduce((total,cartItem) => total + cartItem.book.price * cartItem.quantity, 0)
  }

  return (
    <div id="cart-div">
      <h2 className="m-3">Your Cart</h2>
      <p className="m-3 text-right">Subtotal:  ${cartTotal()}.00</p>
      <div className="d-flex flex-column">
        {cartItemComponents}
      </div>
    </div>
  )
}

export default Cart