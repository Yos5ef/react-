import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }

  render() {
    return (
      <Fragment>
        <div className={this.state.show ? 'show' : 'hide'}>hello</div>
        <button>toggle</button>
      </Fragment>
    );
  }
}

export default App;
