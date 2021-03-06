/**
 * ________RESUBMISSION_________
 * @todo keep working on SearchBook.checkShelves
 *
 * ________________TODOS________________
 * @todo see that the project follows Udacity's  Rubric andStyle Guides (HTML, CSS, JS and GIT (and maybe readme.md too))
 * 
 * @todo see that the project follows Udacity's  Rubric andStyle Guides (HTML, CSS, JS and GIT (and maybe readme.md too))
 * @todo comments and README.md
 * @todo -- Optional -- Generate Documentation with [StuleGUidist](https://www.npmjs.com/package/react-styleguidist)
 * @todo -- Optional -- Go above and beyond (add extra features, as mentioned on concept 4)
 * @todo - Optional -- see if there's docs generator for react. Probably just stic with React Dev Tools
 * @todo -- Optional -- see about test runner for react or just best pratices
 * @todo performance boost. Appy these techniques: 
 *  https://reactjs.org/docs/optimizing-performance.html#use-the-production-build
 *  https://facebook.github.io/react/docs/optimizing-performance.html
 *  https://reactjs.org/docs/reconciliation.html#the-diffing-algorithm
 *  https://www.youtube.com/watch?v=nl8VVig_9aM
 * @todo - Optional - create service worker
 * @todo - Optional - customize style with bootstrap or react-bootstrap (https://www.npmjs.com/package/react-bootstrap)
 *
 * __________________DONE___________________
 *	@todo OK Install and set linter for React
 *	``npm install eslint-plugin-react --save-dev``
 *	create a `.eslintrc.json` file:
 *		```
 *		"extends": [
 *			"eslint:recommended",
 *			"plugin:react/recommended"
 *		]
 *		```
 *		Using instructions from "Thinking in React", from chrome's favorites:
 *			@todo OK Break the UI Into a Component Hierarchy
 *			@todo draw the whole app functionality first
 *			@todo OK Build a Static Version in React
 *				OK leverage React Router (react-router-dom)
 *				OK	install react-router-dom
 *				OK	``import { Route } from 'react-router-dom'``
 *					```
 *						<Route path="/search" render={() => (
 *							)}/>
 *							...
 *						<Route exact path="/" render={() => (
 *							)}/>
 *					```
 *				OK change `<button>` tags to `<link className="class" to="/path">name</link>`
 *			@todo 	OK	Build components that reuse other components, and pass data using props (state is only for interactivity.)
 *				@todo OK Get each Component functioning in isolation
 *				@todo OK And then connect the pieces together
 *				@todo OK move the shelves state from the BooksList component to App.js, and pass props accordingly
 *				@todo OK seems like the common owner will be App.js. Implement better checking for it's render() method, to ensure all state is passed to the lower components
 *				@todo OK update shelves data state for the definitive skeleton
 *				@todo	OK Build a Shelves component, that maps on books assigned for each shelf on the shelves state, on a list, nested dynamically
 *				@todo OK create nested maps in the Shelves component, to iterate shelves and it's lists of books, based on App.js's state.
 *				@todo OK apply destructuring to each component's props, to avoid the props.props.props... effect.
 * @todo OK follow stesp in Trello/Udacity/Project: MyReads: A Book Tracking App
 * @todo OK Add functionality to the BookShelfChanger component
 *		Turns out the books state is all you need, because it has a shelf property, that you can update by calling the BooksAPI update method.
 *			@todo OK Erase BooksApp.state.shelves
 *			@todo OK reorganize props and values in the Shelves and BookShelfChanger components to use only props passed down from the books state in the BooksApp component
 *			@todo OK update the shelf property of the books by interacting with the BookShelfChanger component (state will be changed by calling the BooksAPI.update method, in BooksApp.handleOnMove method)
 * @todo OK Add functionality to the SearchBooks component
 * 		@todo OK use regular expressions, with the regex.test(), string.match() and array.filter() methods to refine search for books (implement them using npm or yarn packages 'escape-string-regexp' and 'sort-by')
 * 		@todo OK update the view as the state of the <select> component changes: '<input onChange={(event) => this.updateQuery(event.target.value)}>' ![code view](C:\Users\ricar\reactnd-project-myreads-starter\src\img\2018-12-25.png)
 *	@todo OK fix bugs
 *		@todo OK books cant switch shelfs from the search results view, **after you search for a query that is not on the search terms**
 *		@todo OK If the input is eraseD on the search books field, the books found search results still appear on the view. Got to setState again to []. THIS PROBLEM HAPPENS WHEN THE INPUT IS ERASED TOO FAST
 *		@todo OK Sometimes changing books from shelfs don't refresh the page
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

/**
 * Renders the virtual DOM on the DOM.
 */
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))