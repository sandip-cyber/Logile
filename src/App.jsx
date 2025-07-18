import React from 'react';
import Home from './Pages/Home';
import Connect from './Pages/Connect';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ads from './Components/Ads';
import Demo from './Pages/Demo';
import Customers from './Pages/Customers';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Ads/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/connect" element={<Connect/>}/>
    <Route path="/demo" element ={<Demo/>}/>
    <Route path="/customers" element = {<Customers/>} />

    </Routes>
    
    </BrowserRouter>
   </>

  );
};

export default App;
