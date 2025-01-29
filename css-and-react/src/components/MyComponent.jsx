import React from 'react'
import "./MyComponent.css";

const MyComponent = () => {
  return (
    <div>
      <h1>CSS de componente</h1>
      <p>Este é o paragrafo do componente</p>
      <p className="my-comp">Este é um paragrafo que o CSS do componente não vazou</p>
    </div>
  )
}

export default MyComponent
