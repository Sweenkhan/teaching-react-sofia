import React from 'react'


// function App() {

//     let logged = false

//     if (logged) return ( <div> <p>user has logged in</p>  </div> )



//     return ( <div> <p> please login</p> </div> )
// }

// export default App






//rendering with ternary operator----------------------------AND OPERATOR
function App(){

   let logged = false

   return (
    <>
         <p>  {  (logged)  ?  "user has logged in"  : "please log in" } </p>  


         <p> { logged && "welcome to our page "}</p>   {/*  AND Operator */}
    </>
   )

}


export default App