"use client"
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
import FAQS2 from './components-jsx/FAQ´S2'
import HowItWorks from './components-jsx/HowItWorks'
import About from './components-jsx/About'
import Proyects from './components-jsx/Proyects'
import Contact from './components-jsx/Contact'
function App() {

  return (
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
  )
}

export default App
