import React, { Component } from 'react'
import Book from './Book'

class BookStock extends Component {
  state = {
    query: ''
  }

  handleInput = e => {
    this.setState(
      {
        query: e.target.value
      }
    )
  }

  
  render() {
    const bookComponents = this.props.books
      .filter(book => 
        book.title.toLowerCase().includes(this.state.query.toLowerCase()) 
        || book.subtitle.toLowerCase().includes(this.state.query.toLowerCase())
        || book.author.toLowerCase().includes(this.state.query.toLowerCase())
      )
      .map(book => 
        <Book 
          key={book.id}
          book={book}
          addToCart={this.props.addToCart}
        />
      )
  
    return (
      <div
        id="book-stock-div"
        className="d-flex flex-column"
      >
        <h1 className="ml-3 mt-3">Our Stock</h1>
        <form className="w-70">
          <div className="form-group row justify-content-center search-row mt-3">
            <label
              htmlFor="search-term"
              className="col-form-label mr-2"
            >Book Search</label>
            <div className="">
              <input
                onChange={this.handleInput}
                type="text"
                className="form-control"
                id="search-term"
                placeholder="Name of book or author" />
            </div>
          </div>
        </form>
        {bookComponents}
      </div>
    )
  }
}

export default BookStock