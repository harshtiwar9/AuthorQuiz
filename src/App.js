import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Author from './components/Author/Author'
import Options from './components/Options/Options'
import axios from 'axios';

function App() {

  let [quizList, setQuizList] = useState([]);

  //const hardCodedrightOption = "Heart of Darkness";
  const questionDbUrl = "http://localhost:9000/QuizQuestions";

  function loadOptions(){
    // alert("1")
    axios.get(questionDbUrl)
        .then(function(response) {
              setQuizList(response.data);
              return <div>Hello World!</div>
        })
        .catch(function(error){
            console.log(error);
        })
  }

 const renderOption = () => {
   
  return (
    <div>
      {
        quizList.map(element =>
          {return(
            <React.Fragment>
              <Author authorName={element.Author}/>
              <Options key={element.id} option={element.options.split(",")} quizId={element.id} />
            </React.Fragment>
          )}
        )}
    </div>
  )
}

useEffect(loadOptions, [])

  return (
    <div className="container">
      <Header />
      <div className="divGrid">
        {renderOption()}
      </div>
    </div>
  );
}

export default App;