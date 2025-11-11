import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div style ={{ textAlign: 'center'}}>
    <h1>Lista de tareas pendientes</h1>
    <form>
      <input type="text" placeholder='Escribe la tarea aquí...' style={{width: "300px", height: "40px"}}></input>
      <button type="submit" style={{  backgroundColor: "#ce2626ff", color: "white", 
        marginLeft: "20px", fontSize: "16px"}}>Enviar</button>
    </form>
  </div>
  </>
  )
}

export default App
