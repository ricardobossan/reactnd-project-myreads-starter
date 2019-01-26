import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'

class Shelves extends Component {
	render() {
		const shelfs = [
			{ "currentlyReading": "Currently Reading" },
			{ "wantToRead": "Want To Read" },
			{ "read": "Read" }
		]
    const { books, onMove } = this.props
		return (
      <div>
        <div className="bookshelf">
        {
        	shelfs.map((shelf) => (
        	<div className="bookshelf" key={Object.keys(shelf)}>
	        	<h2 className="bookshelf-title">{Object.values(shelf)}</h2>
	          <div className="bookshelf-books">
  	          <ol className="books-grid">
  	          {
	  	          books.filter((book) => book.shelf == Object.keys(shelf)).map((book, i) => (	  	          
		              <li key={book.id}>
		                <div className="book">
		                  <div className="book-top">
		                    <div className="book-cover" 
		                    style={{ width: 128, height: 193, 
		                    // if there's no thumbnail, returns an empty string
		                    backgroundImage: book.imageLinks.thumbnail ? `url(${book.imageLinks.thumbnail})` : ""
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
	  	          ))  	          	
  	          }
  	          </ol>
  	        </div>
          </div>
	        	)
        	)
        }
        </div>
      </div>
		)
	}
}

export default Shelves