import React from 'react'
import GameState from './GameState'

export default function GameOver({ gameState }) {
    switch(gameState){
        case GameState.inProgress:
            return<></>
        case GameState.playerOWins:
            return <div className='text-center border-8 border-pink-200 border-dotted p-2.5 m-12 text-2xl'>O Wins</div>
        case GameState.playerXWins:
            return <div className='text-center border-8 border-pink-200 border-dotted p-2.5 m-12 text-2xl'>X Wins</div>
        case GameState.draw:
            return <div className='text-center border-8 border-pink-200 border-dotted p-2.5 m-12 text-2xl'>draw</div>
        default:
            return <></>
    }
}
