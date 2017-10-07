import React from 'react'
// import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from  './SearchBooks'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  state = {
    books: [],
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks />
        )} />
        <Route path="/" exact render={() => (
          <ListBooks books={ this.state.books }/>
        )} />
      </div>
    )
  }
}

export default BooksApp
