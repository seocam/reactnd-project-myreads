import React from 'react'
// import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from  './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {}

  render() {
    return (
      <div className="app">
        <SearchBooks />
        <ListBooks />
      </div>
    )
  }
}

export default BooksApp
