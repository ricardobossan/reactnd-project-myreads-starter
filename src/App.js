import React from 'react'
import { Route } from 'react-router-dom'
import BooksList from './BooksList'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

/**
 * Main component for the app.
 * @class
 */
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],    
    shelves: []    
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })      
      }
    )
  }

  // update state:
  // either by simply repositioning shelves positions
  // either by using array methods splice and push, on the proper positions
  handleOnMove(e, book) {
    // Non strict comparison operators are use here, to avoid errors
    if(book.shelf != e.target.value ) {
      BooksAPI.update(book, e.target.value)
        console.log(`${book} Moved from ${book.shelf} to ${e.target.value}!`)
        // Had to delay state change because it would not happend everytime
        setTimeout(() => {
          BooksAPI.getAll().then((books) => {
            this.setState({ books })          
        })
      }, 500)
    }
  }

  render() {
    const { books } = this.state
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks
            onMove={this.handleOnMove.bind(this)}
          />
          )}/>
        <Route exact path="/" render={() => (
          <BooksList
          books={books} onMove={this.handleOnMove.bind(this)}
           />          
          )}/>
      </div>
    )
  }
}

export default BooksApp