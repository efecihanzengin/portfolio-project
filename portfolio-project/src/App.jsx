import './App.css'
import './global.css'
import React, { useEffect, useState } from "react";
import ModeComponent from './components/ModeComponent';
import { LanguageProvider } from './context/LanguageContext';
import languagesData from './data';
import axios from 'axios';
import LanguageChanger from './components/LanguageChanger';
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {


  return (
    <>
      <LanguageProvider >
      <ToastContainer />
        <Header />
        <Skills />
        <Profile/>
        <Projects/>
        <Footer/>
      </LanguageProvider>
    </>
  )
}


export default App