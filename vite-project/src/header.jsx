import React from 'react'

const Header = ({score, bestScore}) => {
  return (
    <div>
      <h2>Memory Game</h2>
      <h3>Score:{score}</h3>
      <h3>Best Score: {bestScore}</h3>
    </div>
  )
}

export default Header
