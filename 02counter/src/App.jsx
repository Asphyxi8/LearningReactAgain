import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(5)
  // let counter = 5;
  function incVal(){
    setCounter(counter+1)
  }

  function decVal(){

      counter = counter-1
      if (counter<=0){
        setCounter(0)
        counter = 0
      }
      else{
    setCounter(counter);
      }
    }

  return (
    <>
      <h1>Chai aur Vite chalra h {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={incVal}>Add Value</button>
      <hr></hr>
      <button onClick={decVal}>Remove Value</button>
      <a href="google.com">{counter}</a>
    </>
  )
}

export default App
