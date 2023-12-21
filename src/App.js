import logo from './logo.svg';
// import './App.css';
import Checkbox from './components/Checkbox';
import Phrase from './components/Phrase';
import { useAnyKeyToRender, useMousePosition, useWindowSize } from './components/hooks';
import {useState,useEffect,useLayoutEffect} from "react"
import PureCat from "./components/Cat"

function App() {
  const [cats,setCats]=useState(
    ["Biscuit","Jungle","Outlaw"])

  return (
    <div className="App">
      {cats.map((name,i)=>(
        <PureCat key={i} name={name}/>
      ))}
      <button onClick={
        ()=>setCats([...cats,prompt("Name a cat")])}>
        Add a Cat
      </button>
    </div>
  );
}

export default App;
