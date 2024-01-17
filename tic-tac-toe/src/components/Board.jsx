import React from 'react'
import Tile from './Tile'
import Strike from './Strike'

export default function Board({ tiles, onTileClick, playerTurn, strikeClass }) {
  return (
    <div className='grid grid-cols-3 grid-rows-3 cursor-pointer relative'>
      <Tile playerTurn={playerTurn} onClick={()=>onTileClick(0)} value={tiles[0]} className="border-b-8 border-r-8" />
      <Tile playerTurn={playerTurn} onClick={()=>onTileClick(1)} value={tiles[1]} className="border-b-8 border-r-8" />
      <Tile playerTurn={playerTurn} onClick={()=>onTileClick(2)} value={tiles[2]} className="border-b-8" />
      <Tile playerTurn={playerTurn} onClick={()=>onTileClick(3)} value={tiles[3]} className="border-b-8 border-r-8" />
      <Tile playerTurn={playerTurn} onClick={()=>onTileClick(4)} value={tiles[4]} className="border-b-8 border-r-8" />
      <Tile playerTurn={playerTurn} onClick={()=>onTileClick(5)} value={tiles[5]} className="border-b-8" />
      <Tile playerTurn={playerTurn} onClick={()=>onTileClick(6)} value={tiles[6]} className="border-r-8" />
      <Tile playerTurn={playerTurn} onClick={()=>onTileClick(7)} value={tiles[7]} className="border-r-8" />
      <Tile playerTurn={playerTurn} onClick={()=>onTileClick(8)} value={tiles[8]} className="" />
        <Strike strikeClass={strikeClass} />
    </div>
  )
}
