import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/examples/FirstComponent'

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



class SecondComponent extends React.Component {
  render() {
    return(
      <div className="secondComponent">
        I am the second component!
      </div>
    )
  }
}

function ThirdComponent() {
  return(
    <div className="thirdComponent">
      I am the third component!
    </div>
  )
}



export default App;
