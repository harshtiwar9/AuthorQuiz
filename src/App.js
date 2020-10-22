import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Author from './components/Author/Author'
import Options from './components/Options/Options'

function App(props) {

  let [selectedOption, setSelectedOption] = useState("");

  function checkAnswer(){
    console.log(selectedOption);
    //setSelectedOption(value)
  }

  return (
    <div className="container">
      <Header />
      <div className="divGrid">
        <Author />
        <Options />
      </div>
      <input type="submit" onClick={checkAnswer} className="author checkAnswerButton" value="Check Answer" />
    </div>
  );
}

export default App;


{/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}