import React, { useState } from 'react'
import { generateNumber } from '../../util/numberGenerator';
import { Button } from '../Button';
import './buttonsContainer.css'
import { ANSWER } from '../../lookup/answer';
export const ButtonsContainer = ({answerHandler=()=>{}}) => {
    const [style,setStyle] = useState({})
    const positiveAnswerHandler = () => {
      answerHandler(ANSWER.Y)
      };
      const negativeAnswerHandler = () => {
        moveButtonHandler()
      };
const moveButtonHandler = ()=>{
const number = generateNumber()
 setStyle({left:`${number}%`})
}
  return (
    <div className='button-container'>
        <Button onClick={positiveAnswerHandler}>Yes</Button>
     <div className="moving-container">
         <Button onHover={moveButtonHandler} style={style} onClick={negativeAnswerHandler}>No</Button>
    </div>
        
    </div>
  )
}
