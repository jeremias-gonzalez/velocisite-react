
import { useState } from 'react'
import { useEffect } from 'react';


import "preline/preline";

import { IStaticMethods } from "preline/preline";

import Navbar2 from './components-jsx/Navbar2'
import Footer from './components-jsx/Footer'
import { SparklesPreview } from './components-jsx/Sparkles'
import Services from './components-jsx/Services'
import { HeroHighlight } from './components/HeroHighlight'
import Hero from './components-jsx/Hero'
import FAQS2 from './components-jsx/FAQS2'
import HowItWorks from './components-jsx/HowItWorks'
import About from './components-jsx/About'
import Proyects from './components-jsx/Proyects'
import Contact from './components-jsx/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <Router>
    <div className='bg-white  dark:bg-dark  '>
      <Navbar2/>
      <SparklesPreview/>
      
      <About/>
       <Proyects/>
      <Services/>
      <FAQS2/>
      <Contact/>
      <Footer/>
    </div>
    </Router>
  )
}

export default App
