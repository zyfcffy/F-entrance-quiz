import React, { Component } from 'react';
import './App.scss';
import Student from './components/Student/Student';
import Team from './components/Student/Team/Team';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Team />
        <Student />
      </div>
    );
  }
}

export default App;
