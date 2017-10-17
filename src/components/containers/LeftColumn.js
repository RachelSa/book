import React, { Component } from 'react';
import Search from '../search/index'

class LeftColumn extends Component {



  render(){
    return (
      <div>
        <Search handleSubmit={this.props.handleSubmit}/>
      </div>
    )
  }
}

export default LeftColumn;
