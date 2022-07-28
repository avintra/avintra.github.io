import React from 'react'
import './Home.css';
import pic from "./1.png";
import pic2 from "../assets/computer.png";
import pic3 from "../assets/mobile3d.png";
import pic4 from "../assets/graph.png";
import pic5 from "../assets/rocket.png";
import play from "../assets/play.png";





export default function Home() {
  return (
    <> 
    <div className='container'>
      
    <div className='title'>
      <span>   
      <h1  className='text' style={{fontSize: "50px"}} >The super way <br/>to boost your <br/> Reach.</h1>
      <span>
        <div className='subtitle'> ChatBots with easy integration to engage visitors.</div>
      </span>
      </span>
      <div className='button'>
      <a type="button" className="btn btn-outline-danger btn-lg" href="/documentation"><img src={pic5} style={{height:"30px"}} alt=''  /> Get Started</a>
      
      {/* <button type="button" className="btn btn-outline-secondary btn-lg"><img src={play} className='' alt='' /> How it Works</button> */}
      </div>
     
    </div>
    
    
    </div>
    <div className='sideimage' > 
    <img src={pic} className='image' alt='' />
    <img src={pic2} className='sideimage1' alt='' />
    <img src={pic3} className=' sideimage2' alt='' />
    <img src={pic4} className='sideimage3' alt='' />


    </div>


    </>
    
  )
}




   
    
  //  <img src={pic2} className='sideimage1' alt='' />
  
   
  //  <img src={pic} className='image' alt='' />
  //  <img src={pic3} className=' sideimage2' alt='' />
  
  
  
  //  <img src={pic4} className='sideimage3' alt='' />

   



   