import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'
import Challenge from './components/Challenge'

function App() {
  const [count, setCount] = useState(0)

  const redTitle = true

  const cars = [
    {"id": 1, "brand": "ferrari", "color": "red", "km": 0},
    {"id": 2, "brand": "lamborghini", "color": "yellow", "km": 0},
    {"id": 3, "brand": "ford", "color": "blue", "km": 0}
  ]

  return (
    <>
      <div>
        <h1>React com CSS</h1>
        <MyComponent/>
        <p>Paragrafo do App jsx</p>
        <p style={{color:"Blue", padding:"25px", borderTop: "2px solid red", backgroundColor: "lightblue"}}>Este é um elemento estilizado de forma inline</p>
        <h2 className={redTitle ? "red_title" : "title"}>Este titulo vai ter classe dinâmica</h2>
        <Title/>
        <h1>Detalhes dos carros</h1>
        {cars.map((car) => (
          <Challenge key={car.id} brand={car.brand} color={car.color} km={car.km}/>
        ))}
      </div>
    </>
  )
}

export default App
