//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Crea un componente PersonCard con las propiedades firstName, lastName, age, y hairColor
function PersonCard(props) {
  return (
    <div>
      <h1>{props.lastName}, {props.firstName}</h1>
      <p>Age: {props.age}</p>
      <p>Hair Color: {props.hairColor}</p>
    </div>
  )
}
function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"} />
        <PersonCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"} />
        <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"} />
        <PersonCard firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Brown"} />
      </div>
    </>
  )
}

export default App
