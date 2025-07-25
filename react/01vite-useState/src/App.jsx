import { useState } from "react"

function App() {


  let dateOfBirth = "07-01-1995"

  const [count, setCount] = useState(0)


  function handleInc() { 
    setCount(count + 1)
  }

  function handleDec(){
    if(count > 0){
      setCount(count - 1)
    } else {
      setCount(0)
    }

  }


  // handleInc()

  return (
    <div className="parent">
      <div className="first">

        <p>sofia date of birth {dateOfBirth} </p>

        <p style={{ backgroundColor: "red", color: "white", padding: "0 15px" }}>Hi this is our first page</p>

        <button onClick={handleInc}>inc</button> 
        <p> counting {count}</p> 
        <button onClick={handleDec}>dec</button>

      </div> 
    </div>
  )
}


export default App