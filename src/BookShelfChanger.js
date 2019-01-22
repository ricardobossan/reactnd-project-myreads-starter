import React, { Component } from 'react'

class BookShelfChanger extends Component {
	onCurrent(callBack) {
		callBack()
	}

	render() {
/*		let {shelf} = this.props
		console.log(shelf)
*/
    const { onMoveToCurrent } = this.props
    console.log(onMoveToCurrent)
		return (
	    <div className="book-shelf-changer">
	      <select onChange={onMoveToCurrent}>
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