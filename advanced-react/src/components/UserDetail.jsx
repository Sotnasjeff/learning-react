import React from 'react'

const UserDetail = ({nome, idade, profissão}) => {
  return (
    <div>
        <div>
            {idade >= 18 && 
                <ul>
                    <li>Nome: {nome}</li>
                    <li>Profissão: {profissão}</li>
                </ul>}
        </div>
    </div>
  )
}

export default UserDetail
