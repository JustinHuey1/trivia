import React, { Component } from 'react';
// import components


class Question extends Component {
  
  render() {
    return (
      <div>
       {this.props.q}
      </div>
    );
  }
}

export default Question;