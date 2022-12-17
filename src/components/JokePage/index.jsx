import React, { useMemo } from 'react'
import cat from "../../images/cat-heart.gif";
import forward from "../../images/forward.gif";
import '../AskPage/askPage.css'
import './jokePage.css'
import { ButtonsContainer } from "../ButtonsContainer";
import { useState } from "react";
import { ANSWER } from "../../lookup/answer";
import { useParams } from 'react-router-dom';
import { queryCheck } from '../../util/queryCheck';
const JokePage = () => {
  const {query} = useParams()
   const isName = useMemo(()=>queryCheck(query),[query]) 
    const [image, setImage] = useState(cat);
    const [name] = useState(isName && query);
    const [answerState,setAnswerState] = useState('')
    const [header, setHeader] = useState("Will you go out with me?");
    const answerHandler = (answer) => {
      if (answer === ANSWER.Y) {
        setAnswerState(ANSWER.Y)
        setHeader(`Forward this link to 10 people. You will get good news in 10 mins`);
        setImage(forward);
      }
    };
  return (
    <div className="Ask">
    <header className="Ask-header">
      <div className="text-container">
        {name && answerState !== ANSWER.Y && <div className="header-text name">Hey {name}</div>}
        <div className="header-text">{header}</div>
      </div>

      <img src={image} className="image" alt="logo" />
      {answerState !== ANSWER.Y &&<ButtonsContainer answerHandler={answerHandler} />}
    </header>
  </div>
  )
}
export default JokePage
