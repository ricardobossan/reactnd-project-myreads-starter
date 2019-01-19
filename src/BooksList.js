import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelves from './Shelves'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

class BooksList extends Component {
  
  PropTypes = {
    books: PropTypes.array.isRequired
  }

  componentDidMount() {
    console.log(this.props)
  }
  render() {
    const { books, shelves } = this.props
    // Perform a check to see if the state was updated
    if((books.length = 7) && (shelves.length = 3)) {
      console.log(this.props)
      const { books } = this.props
      return (
        <div className="{this.props.books}">          
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <Shelves
              books={books} shelves={shelves}
            />
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      )
    }
  }
}

export default BooksList