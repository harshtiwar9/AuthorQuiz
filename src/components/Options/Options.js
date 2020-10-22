import React, { useState } from 'react';
import './Options.css';

function Options(){
    
    let currentSelectedOption = 0;
    let [selectedOption, setSelectedOption] = useState();

    function OnClickOption(event){
        
        //console.log(event.target.getAttribute("data"));
        if(currentSelectedOption === 0){
            currentSelectedOption = parseInt(event.target.getAttribute("data"));
            event.target.style.background = "blue";
        }else if(currentSelectedOption === parseInt(event.target.getAttribute("data"))){
            document.getElementsByClassName("option"+event.target.getAttribute("data"))[0].style.backgroundColor = "#c4e8f2";
            currentSelectedOption = parseInt(0);
        }
        else{
            //console.log("option"+currentSelectedOption);
            document.getElementsByClassName("option"+currentSelectedOption)[0].style.backgroundColor = "#c4e8f2";
            currentSelectedOption = parseInt(event.target.getAttribute("data"));
            event.target.style.background = "blue";
        }
        
        // setSelectedOption(currentSelectedOption);
        // selectedOption = currentSelectedOption;
        // console.log("From Option : "+selectedOption)

    }

    return(
        <div className="divOption">

            <ul>
                <a href="#!" onClick={OnClickOption} data="1" className="options option1">Maceth</a>
                <a href="#!" onClick={OnClickOption} data="2" className="options option2">The Shining</a>
                <a href="#!" onClick={OnClickOption} data="3" className="options option3">Heart of Darkness</a>
                <a href="#!" onClick={OnClickOption} data="4" className="options option4">Hamlet</a>
            </ul>
            
        </div>
    )
}

export default Options;