import React from 'react' 


function Profile({profilePicture, name, email}) {
 

    // let profiledata = {
    //     name: "sween",
    //     lastName : "khan",
    //     age: 25,
    //     education: "12th fail"
    // }

    // let {name, lastName, age, education} = profiledata
 
   
  return ( 
        <div className="profile" >
                  <h3 >Profile</h3>
                  <img src={profilePicture} alt=""/>
                  <p>Name:   {name}</p>
                  <p>Email: {email}</p>
                </div>
   
  )
}

export default Profile