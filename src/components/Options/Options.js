import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Options.css';

function Options(props) {

    let [isSelectedOption, setIsSelectedOption] = useState("");
    let [toggleCheck, setToggleCheck] = useState("");
    let [SelectedOptionQuizId, setSelectedOptionQuizId] = useState("");
    let [answerList, setAnswerList] = useState([]);

    const answerDbUrl = "http://localhost:9000/QuizAnswer";

    function loadAnswers(){
        axios.get(answerDbUrl)
            .then(function(response) {
                  setAnswerList(response.data);
            })
            .catch(function(error){
                console.log(error);
            })
      }

    // useEffect(loadAnswers)  /// everytime component gets rederned
    useEffect(loadAnswers, []) // invoke only once
    // useEffect(loadAnswers, [ isSelectedOption ])// invoke everytime isSelectedOption gets updated

    const selectOption = (element, Id) => {
        setToggleCheck("")
        if (isSelectedOption === element) {
            setIsSelectedOption("")
            setSelectedOptionQuizId("")
        } else {
            setIsSelectedOption(element)
            setSelectedOptionQuizId(Id)
        }
    }

    const checkAnswer = () => {
        if(answerList[SelectedOptionQuizId] === isSelectedOption.trimStart()){
            setToggleCheck(true);
        }else{
            setToggleCheck(false);
        }
    }


    const getClassName = (element) => {
        if (element === isSelectedOption) {
            if(toggleCheck === true){
                return "optiongreen"
            }else if(toggleCheck === false){
                return "optionred"
            }else{
                return "optionblue"
            }
        }
        else {
            return "options";
        }
    }

    return (
        <div className="divOption">

            <ul>
                {
                    props.option.map((element) => {
                        return <a href="#!" key={element} onClick={() => selectOption(element, props.quizId)} className={getClassName(element)}>{element}</a>
                    })
                }
                {<p><input type="submit" className="author checkAnswerButton" onClick={() => checkAnswer()} value="Check Answer" /></p>}
            </ul>
        </div>
    )
}

export default Options;