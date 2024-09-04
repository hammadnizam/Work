import { useState } from "react";
import "./App.css";

function App() {
  let [num, setNum] = useState(0);

  let incFun = () => {
    setNum(num + 1);
  };

  
  let decFun = () => {
    setNum(num - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{num}</h1>

      <button onClick={incFun} disabled={num >= 20} style={{backgroundColor:"green", color:'white'}}>Increment</button>
        <br /><br />
        <button onClick={decFun} disabled={num <= 0} style={{backgroundColor:"red", color:'white'}}>Decrement</button>
      </header>
    </div>
  );
}

export default App;