
import React, { Component } from 'react'
import Book from './Book'


class BookShelf extends Component {

  render() {
    const books = this.props.books.map((book) => (
      <li key={ book.id }>
        <Book
          title={ book.title }
          authors={ book.authors }
          cover={ book.imageLinks.smallThumbnail }
          shelfs={ this.props.shelfs }
          shelf={ this.props.id }
        />
      </li>
    ))

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ this.props.name }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { books }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
