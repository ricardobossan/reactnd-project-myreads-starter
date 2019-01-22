import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelves from './Shelves'
import PropTypes from 'prop-types'

class BooksList extends Component {
  
  PropTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const { books, shelves, onMoveToCurrent } = this.props
    return (
      <div className="list-books">          
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelves
          books={books} shelves={shelves} onMoveToCurrent={onMoveToCurrent}
          />
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BooksList