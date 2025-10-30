import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import "./styles/components/styles.css";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
        <About/>
        <Projects/>
        <Contact/>
    </>
  );
}
