"use client";
import { useEffect } from "react";

import { SparklesCore } from "../components/sparkles";
import HowItWorks from "./HowItWorks";
import Hero from "./Hero";
import Aos from "aos"
import Footer from "./Footer";

import "aos/dist/aos.css" 
export function SparklesPreview() {
  useEffect(()=>{
    Aos.init();
})
  return (
    
    <div className="h-[40rem] relative w-full dark:bg-black bg-blend-lighten flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div data-aos="fade-down"  >

       <Hero/>
       
       
       </div>
       
      
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full dark:w-full dark:h-full"
          particleColor="#2bb9a4"
          
        />
        
      </div>
      
    </div>
    
  );
}
