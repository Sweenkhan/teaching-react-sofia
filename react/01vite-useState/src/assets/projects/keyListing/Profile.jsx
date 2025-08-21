function Profile({image, title, price}) {
  

  return ( 
        <div className="profile" style={{display: "flex"}}>
                  <h3 >Profile</h3> 
                  <img src={image} />
                  <p>Product Name:   {title}</p>
                  <p>Price: {price}</p>
                </div>
   
  )
}

export default Profile