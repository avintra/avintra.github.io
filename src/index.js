import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from './Components/Register'
import Profile from './Components/profile'
import Login from './Components/Login'
import Logout from './Components/Logout'
import Create from './Components/create'
import List from './Components/list'
import Manage from './Components/manage'
import Edit from './Components/edit'
import Pricing from './Components/Pricing';
import Documentation from './Components/documentation'
import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App/>}/>
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/logout" element={<Logout/>} />
      <Route path="/create" element={<Create/>}/>
      <Route path="/list" element={<List/>}/>
      <Route path="/manage/:id" element={<Manage/>}/>
      {/* <Route path="/edit/:id" element={<Edit/>}/> */}
      <Route path="/documentation" element={<Documentation/>}/>
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
