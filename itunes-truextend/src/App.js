import React, { Component } from 'react';
import AppBar from "../src/components/AppBar"
import Home from "./components/Home"

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
