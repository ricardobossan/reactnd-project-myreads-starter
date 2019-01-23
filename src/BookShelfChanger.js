import React, { Component } from 'react'

class BookShelfChanger extends Component {
	onCurrent(callBack) {
		callBack()
	}

	render() {
    const { onMove, book} = this.props
		return (
	    <div className="book-shelf-changer">
	      <select defaultValue="Currently Reading" onChange={(event) => onMove(event.target.value, book)}>
	        <option value="" disabled>Move to...</option>
	        <option value="Currently Reading">Currently Reading</option>
	        <option value="Want to Read">Want to Read</option>
	        <option value="Read">Read</option>
	        <option value="None">None</option>
	      </select>
      </div>
		)
	}
}

export default BookShelfChanger