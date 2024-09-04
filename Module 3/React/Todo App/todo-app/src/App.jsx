
import { useState } from "react";

import "./App.css";

function App() {
 
  let [inputText, setInputText] = useState("");
  let [list, setList] = useState([]);

  let addItem = () => {
    // list.push(inputText)
    let copyList = [...list];
    copyList.push(inputText);
    setList(copyList);
    
  };

  let handleInput = (e) => {
    setInputText(e.target.value);
  };

  let delItem = (index) => {
    let copyList = [...list];
    copyList.splice(index, 1)
    setList(copyList);
  };


  let editItem = (index) => {
    let newValue = prompt('Enter Updated Value', list[index]);
    if (newValue !== null) {
      let copyList = [...list];
      copyList[index] = newValue;
      setList(copyList);
    }
  };

  return (
    <>
      <input style={{color:'blue', backgroundColor:'InfoBackground', borderRadius:'30px'}} onChange={handleInput} type="text" name="" id="" />
      <br /><br />
      <button style={{backgroundColor:'green', color:'white'}} onClick={addItem}>Add Item</button>

      <ol>
        {list.map((data, index) => {
          return (
            <li key={index}>
              {data} <button onClick={() => delItem(index)} style={{backgroundColor: 'red', color:'white'}}>Delete</button>
              {data} <button onClick={() => editItem(index)} style={{backgroundColor: 'blue', color:'white'}}>Edit</button>

            </li>
          );
        })}
      </ol>


    </>
  );
}

export default App;
