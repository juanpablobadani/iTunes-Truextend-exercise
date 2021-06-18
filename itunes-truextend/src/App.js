import React, { Component } from 'react';
import AppBar from "../src/components/AppBar"
import Home from "../src/components/Home/Home"

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar></AppBar>
        <Home></Home>
      </div>
    );
  }

}

export default App;
