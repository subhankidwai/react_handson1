import React from "react";
import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from "./ClassComponent";
import './App.css';
import { useState } from "react";

function App(){

  // const [state, setState] = useState(initialstate)

  const [show, setshow]=useState(false)
  const [show2,setshow2]=useState(false)

  const handleClick1 = () => {
    setshow(!show)
  }

  const handleClick2 = () => {
    setshow2(!show2)
  }

  return (
    <div className = "app">
      <div><h2 className="heading">Styling Using Functional and Class Component</h2></div>
      <div className="h2">
        <button onClick={handleClick1} className="btn1">To see styling in functional component</button>
        <button onClick={handleClick2} className="btn2">To see styling in class component</button>
      </div>
      <div>
        {show?<FunctionalComponent/>:<div></div>}
        {show2?<ClassComponent/>:<div></div>}
      </div>

    </div>

  )
}

export default App;
