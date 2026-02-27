import { useState } from 'react'

import './App.css'

function App() {
  const [text, setText] = useState("hello world")

  function Endtheworld(){
    if(text=="hello world"){
    setText("end the world");
    }
    else{
      setText("hello world")
    }

  }
  return (
    <>

    <h1>{text}</h1>
    <button onClick={Endtheworld}>end</button>
    </>
  );
}

export default App
