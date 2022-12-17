import React from 'react'
import './button.css'
export const Button = ({onClick=()=>{},onHover = ()=>{},children, style}) => {
  return (
    <button onMouseOver={onHover} className={`button ${style && 'button-move'}`} style={style || {}} onClick={onClick}>{children}</button>
  )
}
