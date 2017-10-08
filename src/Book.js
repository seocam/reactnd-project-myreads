
import React, { Component } from 'react'
import { camelcaseToRegularForm } from './utils'


class Book extends Component {
  render() {

    const style = {
      width: 128,
      height: 188,
      backgroundImage: `url("${this.props.cover}")`
    }

    const shelfOptions = this.props.shelfs.map((shelfName) => (
      <option
        key={ shelfName }
        value={ shelfName }>{ camelcaseToRegularForm(shelfName) }</option>
    ))

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={style}></div>
          <div className="book-shelf-changer">
            <select defaultValue={ this.props.shelf }>
              <option value="none" disabled>Move to...</option>
              { shelfOptions }
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{ this.props.title }</div>
        <div className="book-authors">{ this.props.authors }</div>
      </div>
    )
  }
}

export default Book
