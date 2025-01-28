import React, { useState } from 'react'

const ConditionalRender = () => {
  
  const [x] = useState(false);

  const [name, setName] = useState("João")
  return (
    <div>
      <h1>Isso será exibido</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Se x for falso, sim!</p>}
      <h1>If Ternário</h1>
      {name === "Jubileu" ? (<div><p>Bem vindo Jubileu</p></div>) : (<div><p>Se não é Jubileu não é bem vindo</p></div>)}
      <button onClick={() => setName("Jubileu")}>Clique aqui se for Jubileu</button>
    </div>
  )
}

export default ConditionalRender
