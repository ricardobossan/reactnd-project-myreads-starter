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
    BooksAPI.getAll().then((books) => this.setState( { books , 
      "shelves": [
        {"Currently Reading": [
          this.state.books[0], "book-2", "book-3"
        ]},
        {"Want to Read": [
          "book-4", "book-5"
        ]},
        {"Read": [
          "book-6", "book-7"
        ]}
      ]}))
    .then(() => console.log(this.state))
  }

  render() {
    const { books, shelves } = this.state
    // Perform a check to see if the state was updated
    if((books.length = 7) && (shelves.length = 3)) {
      console.log(this.state)
      return (
        <div className="app">
          <Route path="/search" render={() => (
            <SearchBooks
            books={books} shelves={shelves}
             />
            )}/>
          <Route exact path="/" render={() => (
            <BooksList
            books={books} shelves={shelves}
             />
            )}/>
        </div>
      )
    }      
  }
}

export default BooksApp