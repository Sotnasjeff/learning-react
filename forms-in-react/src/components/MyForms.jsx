import React from 'react'
import { useState } from 'react'
import "./MyForm.css"

const MyForms = ({user}) => {
  const [name, setName] = useState(user ? user.name: "")
  const [email, setEmail] = useState(user ? user.email : "")
  const [bio, setBio] = useState();
  const [role, setRole] = useState();

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Sending form")

    setName("");
    setEmail("");
    setBio("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Nome:</label>
            <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name}/>
        </div>
        <label>
            <span>Email:</span>
            <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(e) => {setEmail(e.target.value)}} value={email}/>
        </label>
        <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => {setBio(e.target.value)}} value={bio}></textarea>
        <label>
            <span>Função no sistema</span>
            <select name="role" onChange={(e) => {setRole(e.target.value)}} value={role}>
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
            </select>
        </label>
        <input type="submit" value="enviar"/>
      </form>
    </div>
  )
}

export default MyForms
