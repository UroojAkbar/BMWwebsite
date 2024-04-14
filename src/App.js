import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CarModel from "./components/CarModel";
import About from "./components/About";
import Video from "./components/Video";
import Collections from "./components/Collections";
import Forever from "./components/Forever";
import Footer from "./components/Footer";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Header/>
      <CarModel/>
      <About/>
      <Video/>
      <Collections/>
      <Forever/>
      <Footer/>
     
    </BrowserRouter>
  );
};

export default App;