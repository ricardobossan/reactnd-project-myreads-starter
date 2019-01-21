import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'

class Shelves extends Component {
	render() {
		const { books, shelves } = this.props
		return (
      <div>
        <div className="bookshelf">
        {
        	shelves.map((shelf) => (
        	<div className="bookshelf" key={Object.keys(shelf)[0]}>
	        	<h2 className="bookshelf-title">{Object.keys(shelf)[0]}</h2>
	          <div className="bookshelf-books">
  	          <ol className="books-grid">
  	          {
	  	          Object.values(shelf)[0].map((book) => (
		              <li key={book.id}>
		                <div className="book">
		                  <div className="book-top">
		                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
		                    <BookShelfChanger />
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