import React, { Component } from 'react'

class BookShelfChanger extends Component {
	onCurrent(callBack) {
		callBack()
	}

	render() {
    const { onMove, book} = this.props
		return (
	    <div className="book-shelf-changer">
	      <select value={book.shelf} onChange={(event) => 
	      	{
	      		onMove(event, book)
	      	}
	      	}>
	        <option value="" disabled>Move to...</option>
	        <option value="currentlyReading">Currently Reading</option>
	        <option value="wantToRead">Want to Read</option>
	        <option value="read">Read</option>
	        <option value="none">None</option>
	      </select>
      </div>
		)
	}
}

export default BookShelfChanger