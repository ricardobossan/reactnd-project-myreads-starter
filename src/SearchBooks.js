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
		: this.setState({searchResults: []})			
	}

	render() {
		const { onMove } = this.props
		const { searchResults } = this.state
		console.log(searchResults, this.state.query)
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