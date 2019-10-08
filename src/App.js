import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
// import FirstComponent from './components/examples/FirstComponent'
// import SecondComponent from './components/examples/SecondComponent'
// import ThirdComponent from './components/examples/ThirdComponent'
import TodoApp from './components/todo/TodoApp'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        {/* Todo React / Spring Application */}
        <TodoApp/>


        {/* <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent> */}
      </header>
    </div>
  );
}







export default App;
