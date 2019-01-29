import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

/**
 * Search for books on user input, and return results.
 * @class
 */
class SearchBooks extends Component {

	state = {
		query: "",
		searchResults: []
	}

	/**
	 * Updates query state upon user input.
	 * @method
	 */
	updateQuery = (query) => {
		this.setState({
			query: query
		})
		this.updateResults(query)
	}

	/**
	 * Posts search results to the server. If there's no search result, nothing is shown.
	 * @method
	 */
	updateResults(query) {
		query ? 
		BooksAPI.search(query).then(searchResults => {
			searchResults.error ?
				this.setState({searchResults: []})
			: this.setState({searchResults: searchResults})				
		})
		// Non strict comparison operators are use here, to avoid errors.
		: query == "" ?
		// Had to delay state change because it would not happend everytime
		setTimeout(() => this.setState({searchResults: []}), 1000)
		: setTimeout(() => this.setState({searchResults: []}), 1000)
		// Call this method to make sure books appear on the right shelf in this view too
		setTimeout(() => this.checkShelves(this.state.searchResults, this.props.books) , 2000)
	}

	checkShelves = (searchResults, mainBooks) => {
		let newSearchResults = []
		searchResults.map((resultBook, index) => {
			mainBooks.map((mainPageBook) => (
				(() => {
					if((newSearchResults.length < 20) && (resultBook.title === mainPageBook.title)) {
						resultBook.shelf = mainPageBook.shelf
						newSearchResults.splice(index, 0, mainPageBook)
					}
				}))()				
			)
			if(newSearchResults.length < 20) {
				newSearchResults.splice(index, 0, resultBook)
			}
		})
		console.log(newSearchResults)
		this.setState({searchResults: newSearchResults})
	}

	render() {
		const { onMove, books } = this.props
		const { searchResults } = this.state
		console.log(searchResults)
		return (
	    <div className="search-books">
	      <div className="search-books-bar">
	        <Link className="close-search" to="/">Close</Link>
	        <div className="search-books-input-wrapper">
	          <input 
          		onChange={(event) => this.updateQuery(event.target.value)} 
          		value={this.state.query} 
          		type="text" 
          		placeholder="Search by title or author"/>
	        </div>
	      </div>
	      <div className="search-books-results">
	        <ol className="books-grid">
	        	{
	        		searchResults ?
		        	searchResults.map((book) => (
		        		<Book
		        			key={book.id}
		        			book={book}
		        			onMove={onMove}
		        		/>
		        	))	        	
		        	: []	
		        }
	        </ol>
	      </div>
	    </div>
		)
	}
}

export default SearchBooks