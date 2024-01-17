import React from 'react'

export default function Tile({ value, className, onClick, playerTurn }) {
    let hoverClass = null
    if (value == null && playerTurn != null){
        hoverClass =`${playerTurn.toLowerCase()}-hover`
    }
  return (
    <div onClick={onClick} className={`text-current text-8xl flex justify-center items-center ${className} ${hoverClass}`}>
        {value}
    </div>
  )
}
