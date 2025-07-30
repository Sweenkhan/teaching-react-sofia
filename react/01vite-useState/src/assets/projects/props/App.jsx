import profilePic from "../../images/profile.webp"
import profilePic2 from "../../images/profile2.webp"
import profilePic3 from "../../images/profile3.webp"
import Profile from "./Profile"

function App() {


  // function add(a, b){
  //   return a + b
  // }

  // add(4, 5)
  //add(8, 10)
  //add(10 , 20) 
  let answer = 30

  return (
    <div className="instagram">

      <p> what is 15 + 15</p>
      <p>Answer {answer}</p>

      {(answer === 30) ? <p>right answer</p> : <p>wrong answer</p>} 
      
      <h2>Social media</h2>
 
      {(false) && <div>
        <Profile profilePicture={profilePic} name="asha" email="asha@gmail.com" />
        <Profile profilePicture={profilePic2} name="nataasha" email="nataasha@gmail.com" />
        <Profile profilePicture={profilePic3} name="saasha" email="saasha@gmail.com" />
      </div>
      }



    </div>
  )
}

export default App