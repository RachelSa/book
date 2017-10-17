import React, { Component } from 'react';
import '../../styles/Wrapper.css';
import LeftColumn from './LeftColumn'
import CenterColumn from './CenterColumn'
import RightColumn from './RightColumn'

class Wrapper extends Component {

  handleSubmit = (book) => {
    console.log(book)

  }

  render(){
    return (
      <div id="wrapper">
        <LeftColumn handleSubmit={this.handleSubmit}/>
        <CenterColumn/>
        <RightColumn/>
      </div>
    )
  }
}

export default Wrapper;
