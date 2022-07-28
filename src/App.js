import './App.css';
import { Routes, Route } from "react-router-dom";

import Header from './Components/Header'; 
import Pricing from './Components/Pricing';
import Home from './Components/Home';
import Footer from './Components/footer';
import Features from './Components/features';

function App() {
  return (
    <div className="App" >
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Features/>
      <Pricing/>
      <Footer/>
    
    </div>
  );
}

export default App;
