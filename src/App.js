import logo from './assests/GetriPay.png';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header"
import Home from "./components/main/Home";
import {CssBaseline, Typography,Container } from '@material-ui/core';



function App() {
  return (
    <div className="App">
       <CssBaseline />
       <Container maxWidth='lg'>
       {/* <div className='container'> */}
      
      <Header />
      <div className='app__body'>
      <Home />
       </div>   
</Container>
    </div>
    // </div>
  );
}

export default App;
