import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numBool,setnumBool] = useState(false);
  const [charBool,setcharBool] = useState(false);
  const [password,setPassword] = useState("");
  //useRef hook
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghjiklmnopqrstuvwxyz"
    if (numBool){
      str+="0123456789"
    }
    if(charBool){
      str+="!@#$%&*_-+=[]{}~'"
    }
    for (let index = 1; index <= length; index++) {

      let char = Math.floor(Math.random() * str.length + 1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
    console.log(password,numBool,charBool);
  },[length,numBool,charBool,setPassword])
const copyPasswordToClipboard = useCallback(()=>{
passwordRef.current?.select()
passwordRef.current?.setSelectionRange(0,3);
window.navigator.clipboard.writeText(password)
},[password])
  useEffect(()=>passwordGenerator(),[length,numBool,charBool,passwordGenerator])
  return (
<div className="w-full max-w-md mx-auto text-center rounded-xl shadow-md px-4 my-8 text-orange-500 bg-gray-700">
PASSWORD
  <h1 className="flex-shadow rounded-lg overflow-hidden mb-4">
    <input
    type="text" value={password} className ='outline-none my-4 mx-2 w-full py-1 px-3' placeholder = "TUMHRA PASSWORD EE H" readOnly
    ref = {passwordRef}/>

    <button className="flex outline-none bg-blue-100 text-black py-0.5 px-0.5 shrink-0" onClick = {copyPasswordToClipboard}>
      Copy
    </button>
    <input type="range" min={6} max={200} value={length} className="cursor-pointer" onChange={(e) => setLength(e.target.value)}/>
    <label>LENGTH: {length}</label>
    <br></br>
    <input type="checkbox" defaultChecked = {numBool} onChange = {(e) => setnumBool((prev)=>{ 
    return !prev})} />
 <label>NUMBER</label>
 <br></br>
    <input type="checkbox" defaultChecked = {charBool} onChange = {(e) => setcharBool((prev)=>{
    return !prev})} />
    <label>SPECIAL_CHARACTERS</label>


  </h1>
</div>
  )
}

export default App
