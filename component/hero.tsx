"use client";
import React from "react";
import User from "./props1";
//import Link from "next/link";
import Buttons from "./button";

const Hero = () => {
  return (
    <>
    <div className="hero bg-base-200 min-h-screen text-base-content">
  <div className="hero-content flex-col items-center text-center gap-6">
   <section className="mx-auto rounded-lg max-w-full flex flex-col items-center text-center gap-4">
    
    <User img="image2.jpg" width={250}
      description="Bienvenue sur notre plateforme de gestion des profiles étudiants de 2ie"
      titre="Gestion des Profiles Étudiants" />
   </section>
      <Buttons />
    
  </div>
</div>
    
    </>

  );

}
export default Hero;
