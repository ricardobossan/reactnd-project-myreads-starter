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

  // update state:
  // either by simply repositioning shelves positions
  // either by using array methods splice and push, on the proper positions
  handleOnMove(e, shelf, bookIndex) {  
      // updated values
      let shelfName = Object.keys(shelf).toString()
      let bookName = Object.values(shelf).map((booksInShelf) => booksInShelf)[0][bookIndex]

      console.log(shelf, e.target.value, shelfName, bookName, bookIndex)

      // prevState
      let prevShelfPositionChanged = Object.values(Object.values(this.state)[1])[e.target.value]
      let prevStateBook = Object.values(Object.values(Object.values(Object.values(this.state)[0][bookIndex])))

      let stateShelfName = Object.keys(Object.values(Object.values(this.state)[1])[1])[0]

      console.log(prevStateBook, stateShelfName)
/*
      this.setState((prevState) => {
            Object.keys(Object.values(Object.values(prevState)[1])[1])[0] = shelfName
      })
*/    console.log(this.state)
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
          books={books} shelves={shelves} onMove={this.handleOnMove.bind(this)}
           />          
          )}/>
      </div>
    )
  }
}

export default BooksApp