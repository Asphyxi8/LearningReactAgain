import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: "Priyansh",
    age: 21
  }
  let myArr = [1, 2, 3]
  return (
    <>
<h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>TAILWIND TEST</h1>
<Card username="owo?" btnText="hello..dabao"/>
<Card username="chaiaurhode" btnText="hello..!"/>
<Card/>
<Card/>
    </>
  )
}

export default App
