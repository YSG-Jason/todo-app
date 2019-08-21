import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        
        Todo React / Spring Application

        <FirstComponent></FirstComponent>
      </header>
    </div>
  );
}

class FirstComponent extends React.Component {
  render() {
    return(
    <div className="firstComponent">
      First Component
      <SecondComponent></SecondComponent>
    </div>
    )
  }
}

class SecondComponent extends React.Component {
  render() {
    return(
      <div className="secondComponent">
        I am the second component!
      </div>
    )
  }
}

export default App;
