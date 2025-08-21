import React, { useEffect, useState } from 'react'
import Profile from './Profile'

function App() {
   
  const [data, setData] = useState([])
  // const [data, setData] = useState([ {name: "sween khan", age : 24, email: "sween@gmail.com"},
  //      {name: "shabir khan", age : 23, email: "shabir@gmail.com"},
  //     {name: "rebel khan", age : 22, email: "rebel@gmail.com"},
  //     {name: "rahul khan", age : 24, email: "rahul@gmail.com"},
  //     {name: "ravi khan", age : 25, email: "ravi@gmail.com"},
  //     {name: "ranjit khan", age : 25, email: "ranjit@gmail.com"}
  // ])


  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(dt => {  
        console.log(dt) 
        setData(dt)
      });
      
  }, [])



  return (
    <div>
      <p>yes its</p>
      {data.map((productData) => {

        return <Profile key={productData.id} title={productData.title} price={productData.price} image={productData.image} />
      })}

    </div>
  )
}

export default App