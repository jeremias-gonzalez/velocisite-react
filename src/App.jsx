import { useState } from 'react'

import Navbarr from './components-jsx/Navbarr'
import Footer from './components-jsx/Footer'
import { SparklesPreview } from './components-jsx/Sparkles'
import Services from './components-jsx/Services'
import { HeroHighlight } from './components/HeroHighlight'
import Hero from './components-jsx/Hero'
import FAQS from './components-jsx/FAQS'
import HowItWorks from './components-jsx/HowItWorks'
import About from './components-jsx/About'
import Proyects from './components-jsx/Proyects'
import Contact from './components-jsx/Contact'
function App() {


  return (
    <div className='bg-white  dark:bg-dark  '>
      <Navbarr/>
      
      <SparklesPreview/>
      <About/>
       <Proyects/>
      <Services/>
      <FAQS/>
      <Contact/>
      <Footer/>


    </div>
  )
}

export default App
