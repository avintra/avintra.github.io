import React from 'react'
import './Pricing.css';

export default function Pricing() {
  console.log("in pricing")
  return (
      <div>

      <div className="container-fluid">
          <center><h1 className='title'>Pricing</h1></center>
    <div className="container p-5">
      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4">
          <div className="card card1 h-100">
            <div className="card-body">
             
              <h5 className="card-title">Basic</h5>
              <small className='text-muted'>Individual</small>
              <br/><br/>
              <span className="h2">Free</span>
              <br/><br/>
              <div className="d-grid my-3">
                <button className="btn btn-outline-dark btn-block">Coming Soon!</button>
              </div>
              <ul>
                <li>Full Chatbot Customization</li>
                <li>Unlimited Responses on Dashboard</li>
                <li>20 Email Responses per month</li>
                
              </ul>
            </div>

            
          </div>
        </div>
        <div className="col-lg-4 col-md-12 mb-4">
          <div className="card card2 h-100">
            <div className="card-body">
             
              <h5 className="card-title">Standard</h5>
              <small className='text-muted'>Small Business</small>
              <br/><br/>
              <span className="h2">₹99</span>/month
              <br/><br/>
              <div className="d-grid my-3">
                <button className="btn btn-outline-dark btn-block">Coming Soon!</button>
              </div>
              <ul>
                <li>All of Basics</li>
                <li>Exclusive access to Future Updates</li>
                <li>100 Email Responses per month</li>
                
              </ul>
            </div>

            
          </div>
        </div>
        <div className="col-lg-4 col-md-12 mb-4">
          <div className="card card3 h-100">
            <div className="card-body">
             
              <h5 className="card-title">Premium</h5>
              <small className='text-muted'>Large Company</small>
              <br/><br/>
              <span className="h2">₹999</span>/month
              <br/><br/>
              <div className="d-grid my-3">
                <button className="btn btn-outline-dark btn-block">Coming Soon!</button>
              </div>
              <ul>
                <li>All of Standard</li>
                <li>1000 Email Responses per month</li>
                <li>Free Discord Integration</li>
                
              </ul>
            </div>

            
          </div>
        </div>
      </div>    
    </div>
    

    </div>
    
    </div>
    
  
  )
}
