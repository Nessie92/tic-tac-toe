import React from 'react'
import GameState from './GameState'

export default function Reset({ gameState, onReset }) {
    if(gameState === GameState.inProgress){
        return;
    }
  return (
    <button onClick={onReset} className='m-12 p-5 bg-red-600 text-white text-2xl w-full'>Reset</button>
  )
}
