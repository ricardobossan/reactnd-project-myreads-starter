/**
 * @todo for component's containers with no className, use React.Fragment, instead of div
 * @todo draw the whole app functionality first
 *    OK leverage React Router (react-router-dom)
 *			OK	install react-router-dom
 *			OK	modify `app.js`
 *			OK	``import { Route } from 'react-router-dom'``
 *				```
		        <Route path="/search" render={() => (
		        	)}/>
							...
		        <Route exact path="/" render={() => (
		        	)}/>
        	```
 *			OK change `<button>` tags to `<link className="class" to="/path">name</link>`
 *    build components
 *			OK use and credit this: [Create React App with an Express Backend
](https://www.youtube.com/watch?v=8bNlffXEcC0) -> Don't need it, i think. the model is already located at "http://Some_Google_URL". I'll just have to save it to local storage, and feed the UI from there, preferably (if, else statements)
 *			Using instructions from "Thinking in React", from chrome's favorites
 *    manage state: ``When a book is on a bookshelf, it should have the same state on both the main application page and the search page.``
 *			the model is already located at "http://Some_Google_URL". I'll just have to save it to local storage, and feed the UI from there, preferably (if, else statements)
 * @todo Use API server and client library that you will use to persist information as you interact with the application.
 *    Instructions for using the API methods are provided in the README in the [starter template repository](https://github.com/udacity/reactnd-project-myreads-starter)
 * @todo Think how'll I access the database from API, with localhost (as done in the reactL3 project, in the server files)
 * @todo use the header "authorization": "token", to make API requests secure (https://auth0.com/learn/token-based-authentication-made-easy/)
 @todo manage State
 *  Where do I put the State? A: inside a parent element of where the data will be used. See Unidirectional Data Flow (https://classroom.udacity.com/nanodegrees/nd001/parts/c3e7b0d6-ffef-4421-b5fc-6df10fd0a1ae/modules/82766b2b-1870-4904-aa90-8ccbe63928c5/lessons/9a065aa0-91d4-44a3-ad96-8d9b44be4d11/concepts/03b53d7e-ae83-4846-bff3-bc4015cd8d76)
 *  Which components will need access to the State (Controlled Components) (component for the <form> tag)?
 * @todo build Components (composition)
 *  Get each Component functioning in isolation
 *  And then connect the pieces together
 * @todo leverage React Router
 * @todo compare project to rubric, to make sure it meets every specification
 * @todo break the App and test again, to make sure it meets specifications
 * @todo use regular expressions, with the regex.test(), string.match() and array.filter() methods to refine search for books (implement them using npm or yarn packages 'escape-string-regexp' and 'sort-by')
 * @todo update the view as the state of the <form> component changes: '<input onChange={(event) => this.updateQuery(event.target.value)}>' ![code view](C:\Users\ricar\reactnd-project-myreads-starter\src\img\2018-12-25.png)
 * @todo
 * @todo
 * @todo
 * @todo
 * @todo - Optional - Go above and beyond (add extra features, as mentioned on concept 4)
 * @todo see that the project follows Udacity's Style Guides (HTML, CSS, JS and GIT)
 * @todo - Optional see if there's docs generator for react. Probably just stic with React Dev Tools
 * @todo see about test runner for react or just best pratices
 * @todo performance boost. Appy these techniques: 
 *  https://reactjs.org/docs/optimizing-performance.html#use-the-production-build
 *  https://facebook.github.io/react/docs/optimizing-performance.html
 *  https://reactjs.org/docs/reconciliation.html#the-diffing-algorithm
 *  https://www.youtube.com/watch?v=nl8VVig_9aM
 * @todo - Optional - create service worker
 * @todo - Optional - customize style with bootstrap or react-bootstrap (https://www.npmjs.com/package/react-bootstrap)
 * @todo OK Q: see how git cleans working directory. A: ``git reset --hard`` (!== from ``git checkout .``, which just unstage changes)
 * @todo OK test the App every step along the way
 *  OK Will test without test runners, because I should understand react better first
 * @todo OK Install and set linter for React
 *  ``npm install eslint-plugin-react --save-dev``
 *  create a `.eslintrc.json` file:
 *    ```
 *    "extends": [
 *      "eslint:recommended",
 *      "plugin:react/recommended"
 *    ]
 *    ```
 *
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))