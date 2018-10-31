import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import BookStock from './components/BookStock';
import Cart from './components/Cart'

class App extends Component {
  state = {
    books: [],
    cartItems: [],
    cartItemIdAcc: 0
  }

  addToCart = (bookId) => {
    if (!this.state.cartItems.find(cartItem => cartItem.book.id === bookId)) {
      const newCartItem = {
        id: this.state.cartItemIdAcc + 1,
        book: this.state.books.find(book => book.id === bookId),
        quantity: 1
      }
      this.setState({
        cartItems: [...this.state.cartItems, newCartItem],
        cartItemIdAcc: this.state.cartItemIdAcc + 1
      })
    } else {
      this.increaseQuantity(bookId)
    }
  }

  increaseQuantity = bookId => {
    this.setState({
      cartItems: this.state.cartItems.map(cartItem => {
        if (cartItem.book.id === bookId) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1
          }
        }
        return cartItem
      })
    })
  }

  decreaseQuantity = bookId => {
    let noneLeft = false
    this.setState({
      cartItems: this.state.cartItems.map(cartItem => {
        if (cartItem.book.id === bookId) {
          noneLeft = cartItem.quantity === 1
          return {
            ...cartItem,
            quantity: cartItem.quantity - 1
          }
        }
        return cartItem
      })
    })
    if (noneLeft) {
      this.removeFromCart(bookId)
    }
  }

  removeFromCart = bookId => {
    this.setState({
      cartItems: this.state.cartItems.filter(cartItem => cartItem.book.id !== bookId)
    })
  }



  componentDidMount = async () => {
    const res = await fetch('http://localhost:8082/api/books')
    const books = await res.json()
    this.setState({ 
      books, 
      ...JSON.parse(localStorage.getItem('savedState')) 
    })
  }

  componentDidUpdate = () => {
    localStorage.setItem('savedState', JSON.stringify(this.state))
  }
  
  render() {
    return (
      <div className="d-flex flex-column App">
       <Header />
       <div className="container d-flex bg-light justify-content-between mb-3">
        <BookStock 
          books={this.state.books}
          addToCart={this.addToCart}
        />
        <Cart 
          cartItems={this.state.cartItems}
          increaseQuantity={this.increaseQuantity}
          decreaseQuantity={this.decreaseQuantity}
          removeFromCart={this.removeFromCart}
        />
       </div>

      </div>
    );
  }
}

export default App;
