import React from 'react'
import { Link } from 'react-router-dom'



function Landing_page() {
  return (
    <div className='landing-container'>
        <div className='left-div'>
          <img src='Images/Insta_Logo.jpg' className='cover-img'></img>
        </div>
        <div className='right-div'>
          <h1>Instagram</h1>
          <Link to={"/Post_View"}>
              <button className='enter-btn'>Enter</button>
          </Link>
        </div>
        
    </div>
  )
}

export default Landing_page
