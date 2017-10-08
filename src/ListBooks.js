
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import { camelcaseToRegularForm } from './utils'


class ListBooks extends Component {

  state = {
    shelfs: {}
  }

  componentWillReceiveProps (nextProps) {
    const shelfs = nextProps.books.reduce((books, book) => {
      if (books[book.shelf] === undefined) {
        books[book.shelf] = []
      }
      books[book.shelf].push(book)
      return books
    }, {})
    this.setState({shelfs})
  }

  render() {
    const shelfs = Object.keys(this.state.shelfs).map((key) => (
      <BookShelf
        key={ key }
        id={ key }
        books={ this.state.shelfs[key] }
        name={ camelcaseToRegularForm(key) }
        shelfs={ Object.keys(this.state.shelfs) }
      />
    ))

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            { shelfs }
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
