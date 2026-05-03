import React from "react";
import Navbar from './../Navbar/Navbar';
import Cars from './../Cars/Cars';
import Work from './../Work/Work';
import Experience from './../Experience/Experience';
import About from './../About/About';
import ContactUs from './../ContactUs/ContactUs';
import Footer from './../Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Cars />
      <Work />
      <Experience />
      <About />
      <ContactUs />
      <Footer />
    </>
  );
}
