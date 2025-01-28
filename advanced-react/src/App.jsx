import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import City from './assets/city.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFunctions from './components/ExecuteFunctions'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'

function App() {
  const [count, setCount] = useState(0)

  const cars = [
    {id: 1, km: 0, color: "Roxo", brand: "Ferrari", newCar: true},
    {id: 2, km: 0, color: "Roxo", brand: "KIA", newCar: true},
    {id: 3, km: 0, color: "Roxo", brand: "Lamborghini", newCar: true}
  ]
  function showMessage(){
    console.log("Evento do componente pai");
    
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }
  return (
    <>
      <div className="card">
        <h1>Section 3</h1>
        {/* Image in public */}
        <div>
          <img src='/img1.jpg' alt='Paisagem'/>
        </div>
        {/* Image in public */}
        <div>
          <img src={City} alt="City"/>
        </div>
        <ManageData/>
        <ListRender/>
        <ConditionalRender/>
        <ShowUserName name="Jubileuzaço"/>
        <CarDetails brand="Ferrari" km={100000} color="Vermelho" newCar ={false}/>
        <CarDetails brand="Ford" km={0} color="Preto" newCar ={false}/>
        <CarDetails brand="Fiat" km={0} color="Laranja" newCar ={true}/>
        {cars.map((car) => (
          <CarDetails key={car.id} brand = {car.brand} km={car.km} color = {car.color} newCar = {car.newCar} />
        ))}
        <Fragment/>
        <Container myValue = "Testing"><p>Esse é o conteúdo</p></Container>
        <ExecuteFunctions myFunction={showMessage}/>
        <Message msg = {message}/>
        <ChangeMessageState handleMessage={handleMessage}/>
      </div>
    </>
  )
}

export default App
