import React from 'react'
import "./End.css"

const End = ({retry, score}) => {
  return (
    <div>
      <h2>Game Over</h2>
      <h2>A sua pontuação foi de: <span>{score}</span></h2>
      <button onClick={retry}>Reiniciar</button>
    </div>
  )
}

export default End
