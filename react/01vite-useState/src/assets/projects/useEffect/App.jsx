import { useEffect, useState } from "react"


function App() {

  const [data, setData] = useState({})

  useEffect(() => {

    function fetchData() {

      fetch("https://randomuser.me/api/")
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          console.log(res.results[0])
          setData(res.results[0])
        })
    }

    fetchData()

  }, [])


  // useEffect( () => {"logic" } , [])    //syntax



  return (
    <div>
      <h2> use Efect hook </h2> 

      {
        data.gender !== undefined
        &&
        <div>
          <img src={data.picture.medium} />
          <h2> {data.name.first}{data.name.last}</h2>
          <p> {data.email}</p>
        </div>

      }

    </div>
  )
}

export default App