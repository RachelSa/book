import React, { Component } from 'react';
import BookList from '../booklist/index';

class CenterColumn extends Component {
  render(){
    return (
      <div>
        <BookList/>
      </div>
    )
  }
}

export default CenterColumn;
