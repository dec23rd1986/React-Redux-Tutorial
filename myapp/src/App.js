import React, { Component } from 'react';
import Ninjas from './ninjas';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My First React app</h1>
        <p>Welcome :)</p>
        <Ninjas />
      </div>
    );
  }
}

export default App;
