import React, { Component } from 'react';
import Ninjas from './ninjas';


class App extends Component {
  state = {
    ninjas : [
      { name: 'Ryu', age: 20, belt: 'black', id: 1 }, 
      { name: 'Yoshi', age: 1, belt: 'black', id: 2 },
      { name: 'Buddy', age: 9, belt: 'golden', id: 3 }
    ]
  }
  render() {
    
    return (
      <div className="App">
        <h1>My First React app</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App;
