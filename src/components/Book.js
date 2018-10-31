import React from 'react'

const Book = props => {
  const handleAdd = e => {
    props.addToCart(props.book.id);
  }

  return (
    <div className="card p-2 m-3 d-flex flex-row align-items-center justify-content-between">
      <div className="d-flex flex-column pt-3">
        <p className="font-weight-bold mb-0">
          {props.book.title}
        </p>
        <p>
          {props.book.subtitle}
        </p>
        <p>
          {props.book.author}
        </p>
      </div>
      <div className="d-flex mr-2">
        <div className="ml-5 mr-3 mt-2">
          ${props.book.price}.00
        </div>
        <button
          onClick={handleAdd}
          className="btn btn-primary"
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default Book