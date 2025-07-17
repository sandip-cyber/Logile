import React from 'react';
import Home from './Pages/Home';
import Connect from './Pages/Connect';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ads from './Components/Ads';
import Demo from './Pages/Demo';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Ads/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/connect" element={<Connect/>}/>
    <Route path="/demo" element ={<Demo/>}/>

    </Routes>
    
    </BrowserRouter>
   </>

  );
};

export default App;
