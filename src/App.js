import React from 'react'
import { Route } from 'react-router-dom'
import BooksList from './BooksList'
import SearchBooks from './SearchBooks'
import BookShelfChanger from './BookShelfChanger'
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
    this.setState( { books , 
      "shelves": [
        {"Currently Reading": [
          books[0], books[1], books[2]
        ]},
        {"Want to Read": [
          books[3], books[4]
        ]},
        {"Read": [
          books[5], books[6]
        ]}
      ]})      
    }
  )
}

handleOnMoveToCurrent(event) {
  console.log("Event handler called")
  console.log(event.target.value)
}

  render() {
    const { books, shelves } = this.state
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks
          books={books} shelves={shelves}
           />
          )}/>
        <Route exact path="/" render={() => (
          <BooksList
          books={books} shelves={shelves} onMoveToCurrent={this.handleOnMoveToCurrent}
           />          
          )}/>
      </div>
    )
  }
}

export default BooksApp