import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelves from './Shelves'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

class BooksList extends Component {
  state = {
    /*
      Initial state for which books are on which shelf, on route "/"
      Changes will be made by the booShelfChanger component
    */
    books: [],
    shelves: [
      {"a": ["book-1", "book-2", "book-3"]},
      {"b": ["book-4", "book-5"]},
      {"c": ["book-6", "book-7"]}
     ]
  }

  PropTypes = {
    books: PropTypes.array.isRequired
  }

  componentDidMount() {
    console.log(this.props)
  }
  render() {
    console.log(this.props)
    const { books } = this.props
    return (
      <div className="{this.props.books}">          
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelves />
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BooksList