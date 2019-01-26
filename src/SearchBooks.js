import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

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
	updateQuery = (e, query) => {
		this.setState({
			query: e.target.value
		})
		this.updateResults(this.state.query)
	}

	/**
	 * Posts search results to the server. If there's no search result, nothing is shown.
	 * @method
	 */
	updateResults(query) {
		this.state.query ?
		BooksAPI.search(query).then(searchResults => this.setState({searchResults: searchResults})) :
		this.setState({searchResults: []})
	}

	render() {
		return (
	    <div className="search-books">
	      <div className="search-books-bar">
	        <Link className="close-search" to="/">Close</Link>
	        <div className="search-books-input-wrapper">
	          {/*
	            NOTES: The search from BooksAPI is limited to a particular set of search terms.
	            You can find these search terms here:
	            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

	            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
	            you don't find a specific author or title. Every search is limited by search terms.
	          */}
	          <input onChange={this.updateQuery} value={this.state.query} type="text" placeholder="Search by title or author"/>

	        </div>
	      </div>
	      <div className="search-books-results">
	        <ol className="books-grid"></ol>
	      </div>
	    </div>
		)
	}
}

export default SearchBooks