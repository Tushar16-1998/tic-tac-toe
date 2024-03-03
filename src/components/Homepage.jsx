import React from 'react'
import Game from "./Game" 
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div>
      <h1> Tic-Tac-Toe </h1>
      <Link to="/game">
        <button className="btn btn-primary btn-lg btn-block">Play Game</button>
      </Link>
    </div>
  )
}

export default Homepage