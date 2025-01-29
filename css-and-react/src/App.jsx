import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
  const [count, setCount] = useState(0)

  const redTitle = true

  return (
    <>
      <div>
        <h1>React com CSS</h1>
        <MyComponent/>
        <p>Paragrafo do App jsx</p>
        <p style={{color:"Blue", padding:"25px", borderTop: "2px solid red", backgroundColor: "lightblue"}}>Este é um elemento estilizado de forma inline</p>
        <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter classe dinâmica</h2>
        <Title/>
      </div>
    </>
  )
}

export default App
