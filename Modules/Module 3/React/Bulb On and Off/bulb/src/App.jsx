import { useState } from 'react'

import './App.css'

function App() {
    let [bulb, setBulb] = useState(false)

  let onBulb = () =>{
    setBulb(true)
  }
  let offBulb = () =>{
    setBulb(false)
  }

  let onToggle = () => {
    setBulb(!bulb)
  }


  return (
    <>
       {
    bulb && <img
    width="300"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH1fniZy1Gj6JNhGQaDS5NGMzOltlIfhSBvw&s"
    alt=""
  />
  }


      
{
  !bulb && <img
  width="300"
  src="https://w7.pngwing.com/pngs/859/425/png-transparent-light-bulb-illustration-incandescent-light-bulb-lamp-bulb-candle-product-light-thumbnail.png"
  alt=""
/>
}
      

      <br />
      <br />
      <button onClick={onBulb} style={{backgroundColor:'green', color:'white'}}>On</button>
      <button onClick={offBulb} style={{backgroundColor:'red', color:'white'}}>Off</button>
      <br /><br />
      <button onClick={onToggle} style={{backgroundColor:'yellow'}}>On and Off</button>
    </>
  )
}

export default App
