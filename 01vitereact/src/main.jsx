import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <>
    <h1>MY APP :D</h1>
    
    </>
  )
}


const anotherElement = (
  <a href="https://google.com" target="_blank">visit google</a>
)

const reactElement = React.createElement(
  'a',
  {
    href:'https://youtube.com', target: '_blank'
  },
  'Element render hora'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <hr>
    </hr>
    <MyApp />
</>
    // anotherElement
    // reactElement
)
