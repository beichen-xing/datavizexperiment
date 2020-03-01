import React, { Component } from 'react';


class Home extends Component {

  handleClick = () => {
    this.props.history.push("/bar")
  }
  render() {
    return (
      <div>
        <h1>Let's start!</h1>
        <button onClick = {this.handleClick} >Start</button>
      </div>
    );
  }
}

export default Home;