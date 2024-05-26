"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Experience from "./Experience";
import Projects from "./Projects";


export default function Main() {
  return (
    <div className="h-[100vh] w-full rounded-md relative flex flex-col items-center justify-start antialiased">
      <div className="relative z-10 w-full p-4">
        <Navbar />
        <section className="max-w-screen-xl mx-auto rounded-md mt-20">
          {/* Hero */}
          <Hero />
          {/* Experience */}
          <Experience />
          {/* Projects */}
          <Projects />
        </section>
      </div>
      <BackgroundBeams />
    </div>
  );
}
