import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/examples/FirstComponent'
import SecondComponent from './components/examples/SecondComponent'
import ThirdComponent from './components/examples/ThirdComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        
        Todo React / Spring Application

        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </header>
    </div>
  );
}







export default App;
