import React, { Component } from 'react';
import '../../styles/Wrapper.css';
import LeftColumn from './LeftColumn'
import CenterColumn from './CenterColumn'
import RightColumn from './RightColumn'

class Wrapper extends Component {
  render(){
    return (
      <div id="wrapper">
        <LeftColumn/>
        <CenterColumn/>
        <RightColumn/>
      </div>
    )
  }
}

export default Wrapper;
