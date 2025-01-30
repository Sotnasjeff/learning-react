import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForms from './components/MyForms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>Formulário</h2>
        <MyForms user={{name:"Josias", email: "josiasboneco@gmail.com"}}/>
      </div>
    </>
  )
}

export default App
