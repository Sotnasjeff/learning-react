import React from 'react'
import "./StartScreen.css"

const StartScreen = ({startGame}) => {
  return (
    <div className='start'>
        <h1>Secret Word</h1>
        <p>Clique no Botão abaixo para começar</p>
        <button onClick={startGame}>Começar</button>
    </div>
  )
}

export default StartScreen
