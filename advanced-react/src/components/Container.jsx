import React from 'react'

const Container = ({children, myValue}) => {
  return (
    <div>
        <h2>Esse é o titulo do Container</h2>
        {children}
        <p>O Valor é: {myValue}</p>
    </div>
  )
}

export default Container
