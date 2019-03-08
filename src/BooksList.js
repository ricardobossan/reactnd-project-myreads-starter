import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Shelves from './Shelves';

/**
 * Renders grid of shelves.
 * @class
 */
class BooksList extends Component {
  PropTypes = {
    books: PropTypes.array.isRequired
  };

  render() {
    const { books, onMove } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelves books={books} onMove={onMove} />
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BooksList;
