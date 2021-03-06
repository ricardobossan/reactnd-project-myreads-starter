import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'


class Books extends Component {
	render() {
		const { book, onMove } = this.props
    console.log(book.shelf)
		return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" 
            style={{ width: 128, height: 193, 
            // if there's no imageLink, returns an empty string
            backgroundImage: book.imageLinks ? `url(${book.imageLinks.thumbnail})` : ""
           }}></div>
            <BookShelfChanger
               onMove={onMove}
               book={book}
            />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>								
		)
	}
}

export default Books