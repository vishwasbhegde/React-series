import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Offerbadge from './Components/Offerbadge';
import Banner from './Components/Banner';
import Card from './Components/Card';
import axios from "axios";
import { useEffect } from "react";
import React from 'react'
import { useState } from "react";
import Netflix from './Pages/Netflix';
import AxioDemo from './Components/AxioDemo';


function App() {

  
  return (
    <div className="App">
      {/* <Header />
      <Offerbadge />
      <Banner />
      <Card/> */}
      {/* <Netflix /> */}
      <AxioDemo />
    </div>
  );
}

export default App;
