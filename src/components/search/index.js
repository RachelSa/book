import React, { Component } from 'react';

class Search extends Component {

  state = {
    book: ""
  }

  handleChange = (event) => {
    this.setState({
      book: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSubmit(this.state.book)

  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="find a book..." onChange={this.handleChange}></input>
      </form>
    )
  }
}

export default Search
