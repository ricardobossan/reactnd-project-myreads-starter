import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'
import Book from './Book'

/**
 * Renders books allocated on each shelf.
 * @class
 */
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
	  	          books.filter((book) => book.shelf == Object.keys(shelf)).map((book) => (
	  	          	<Book
	  	          		key={book.id}
										onMove={onMove}
										book={book}
	  	          	/>
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