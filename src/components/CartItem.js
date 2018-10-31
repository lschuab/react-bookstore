import React from 'react'

const CartItem = ({cartItem, increaseQuantity, decreaseQuantity,removeFromCart}) => {
  const handleMinusClick = e => {
    decreaseQuantity(cartItem.book.id)
  }

  const handlePlusClick = e => {
    increaseQuantity(cartItem.book.id)
  }

  const handleRemove = e => {
    removeFromCart(cartItem.book.id)
  }

  return (
    <div className="card align-self-center mb-2 p-2">
      <div>
        <p className="">
          {cartItem.book.title}
        </p>
        <div className="d-flex justify-content-between book-info">
          <p className="sm-text mb-0">
            Price: ${cartItem.book.price}.00
          </p>
          <p className="sm-text mb-0">
            Quantity: {cartItem.quantity}
          </p>
          <div>
            <button
              type="button"
              className="btn btn-default btn-number ml-2 border"
              onClick={handleMinusClick}
              disabled={cartItem.quantity <= 0}
            >-</button>
            <button
              type="button"
              className="btn btn-default btn-number ml-2 border"
              onClick={handlePlusClick}
            >+</button>
          </div>
          <button 
            className="btn btn-danger sm-text btn-sm"
            onClick={handleRemove}
          >Remove</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem