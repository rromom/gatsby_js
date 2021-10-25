import React,{useState, useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {

  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0)

  useEffect(() => {
    console.log("Total: "+contar);
  }, [contar]);

  const on_off = () =>{
    setStateCar(!stateCar);
    setContar(contar+1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
  <h2>El coche esta: {stateCar ? "Encendido":"Apagado"}</h2> 
  <h4>Clicks: {contar}  </h4>
        <button onClick={on_off}>Encender/Apagar</button>
      </header>
    </div>
  );
}   

export default App;
