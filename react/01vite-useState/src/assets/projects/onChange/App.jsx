import React, { useState } from 'react'


function App() {


const [inputVal, setInputVal] = useState("") 
const [name, setName] = useState("")



function handleBtnClick(){

   setName(inputVal)

   console.log("name has saved")

   setInputVal("")
}


// function handleChange(e){ 
//     setInputVal(e.target.value)   
// }


  return (
    <div>
        <p>Learning about onchange funcnality in react</p>

        {/* <input type='text' placeholder='Write Your name' onChange={handleChange()}  value={inputVal}/> */}.

        <input type='text' placeholder='Write Your name' onChange={(e)=> setInputVal(e.target.value)}  value={inputVal}/>
        
        <button onClick={handleBtnClick}>Add</button>

        <p>{name}</p>
    </div>
  )
}

export default App