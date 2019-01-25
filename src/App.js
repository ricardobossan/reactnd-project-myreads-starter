import React from 'react'
import { Route } from 'react-router-dom'
import BooksList from './BooksList'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

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
      this.setState( { books })      
      }
    )
  }

  // update state:
  // either by simply repositioning shelves positions
  // either by using array methods splice and push, on the proper positions
  handleOnMove(e, book) {
    console.log(book.shelf, e.target.value)
    if(book.shelf.toString() != e.target.value.toString() ) {
      console.log("moving to another shelf")
    }

/*
      this.setState((prevState) => {
            Object.keys(Object.values(Object.values(prevState)[1])[1])[0] = shelfName
      })
*/
  }

  render() {
    const { books } = this.state
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks
          books={books}
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