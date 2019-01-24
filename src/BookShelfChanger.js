import React, { Component } from 'react'

class BookShelfChanger extends Component {
	onCurrent(callBack) {
		callBack()
	}

	render() {
    const { onMove, shelf, bookIndex} = this.props
		return (
	    <div className="book-shelf-changer">
	      <select value={shelf} onChange={(event) => 
	      	{
	      		onMove(event, shelf, bookIndex)
	      	}
	      	}>
	        <option value="" disabled>Move to...</option>
	        <option value="0">Currently Reading</option>
	        <option value="1">Want to Read</option>
	        <option value="2">Read</option>
	        <option value="3">None</option>
	      </select>
      </div>
		)
	}
}

export default BookShelfChanger