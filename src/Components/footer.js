import React, { useEffect,useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Footer(){
  const [email, setEmail] = useState("")
  const history = useNavigate()

  const handleChange = (e) => {
    setEmail({
        ...email,
        [e.target.name]: e.target.value.trim(),
    })
}

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
    axios({
  method: "post",
  url: "http://127.0.0.1:8000/api/offer/invite_email/",
  data: {"invited_email":email},
  headers: { 'Content-Type' : 'application/json; charset=UTF-8',
        accept: 'application/json'  },
})
  .then(function (response) {
    //handle success
    console.log(response);
     history('/')
  })
  .catch(function (response) {
    //handle error
    console.log(response);
  });
    
  }
    return (
            <footer className="footer">
   
      <div className="container text-center">
        <div className="row justify-content-center pt-xxl-2">
        <center><h2 className="title">Get 1 Month 'Standard' Subscription Free 👇</h2></center>
          <div className="col-xl-6 col-lg-7 col-md-9 col-sm-11">
             
            <form className="subscription-form position-relative validate" action=""  name="mc-embedded-subscribe-form">
              <div className="d-flex flex-column flex-sm-row">
                <div className="position-relative w-100 mb-3 mb-sm-0 me-sm-3">
                  <input className="form-control form-control-lg ps-5" type="email" name="email" placeholder="Your email" required onChange={handleChange}/>
                  <i className="bx bx-envelope fs-xl text-muted position-absolute top-50 start-0 translate-middle-y ms-3" ></i>
                </div>
                <button className="btn btn-primary shadow-primary btn-lg" type="submit" name="subscribe" onClick={handleSubmit}>Subscribe</button>
              </div>

            </form>
          </div>
        </div>
        <div className="pt-5 mt-lg-3 mt-xl-4">
          <p className="text-muted mb-0">© All rights reserved. Made with 🧡 by&nbsp; <a href="" className="text-muted" target="_blank" rel="noopener">Debug Thugs</a></p>
        </div>
      </div>
    </footer>
    )
} 