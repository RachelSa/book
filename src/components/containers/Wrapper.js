import React, { Component } from 'react';
import '../../styles/Wrapper.css';
import BookList from './BookList';
import Stats from './Stats'

class Wrapper extends Component {
  render(){
    return (
      <div id="wrapper">
        <BookList/>
        <Stats/>
      </div>
    )
  }
}

export default Wrapper;
