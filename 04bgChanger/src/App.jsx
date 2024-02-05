import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")
  function chgColor(color){
    setColor(color);
  }
  return (
<div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

  <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl">
    <button className="outline-none px-4 py-2 rounded-full" style={{backgroundColor: "red"}} onClick={() => chgColor("red")}> 
    RED
    </button>
    <button className="outline-none px-4 py-2 rounded-full" style={{backgroundColor: "blue"}} onClick={() => chgColor("blue")}> 
    BLUE
    </button>
    <button className="outline-none px-4 py-2 rounded-full" style={{backgroundColor: "green"}} onClick={() => chgColor("green")}> 
    GREEN
    </button>
  </div>
</div>
</div>
  )
}

export default App
