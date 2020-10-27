import React, { Component } from 'react';
import './App.scss';
import Student from './components/Student/Student';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Student />
      </div>
    );
  }
}

export default App;
