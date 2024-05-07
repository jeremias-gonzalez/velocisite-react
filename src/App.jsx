import { useState } from 'react'

import Navbarr from './components-jsx/Navbarr'

import { SparklesPreview } from './components-jsx/Sparkles'

import { HeroHighlight } from './components/HeroHighlight'
import Hero from './components-jsx/Hero'


function App() {


  return (
    <div className='bg-white  dark:bg-black   '>
      <Navbarr/>
      
      <SparklesPreview/>



    </div>
  )
}

export default App
