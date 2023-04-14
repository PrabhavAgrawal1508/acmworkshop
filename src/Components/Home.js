import React from 'react'
import background_image from '..//Assets/dashboard.webp.png'
import '../Styles/home.css'

function Home() {
  return (
    <div className='home_main_container'>
        <div className='home_button'><p>Just launched ghost 3.0</p></div>
        <div className='home_heading'><p>Turn your audience <br /> <span className='business'>into a business</span></p></div> 
        <div className='home_background'></div>
        <img className='home_image' src={background_image}/>
        
    </div>
    )
}

export default Home