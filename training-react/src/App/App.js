import React, { Component } from 'react'
import './App.css'
import { Input } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Prosty komponent</h1>
        <Input value="text" />
      </div>
    );
  }
}

export default App
