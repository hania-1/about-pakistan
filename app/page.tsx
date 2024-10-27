'use client'

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import First from "@/components/First";
import About from "@/components/About";
import Capital from "@/components/Capital";
import Culture from "@/components/Culture";
import Politics from "@/components/Politics";
import Population from "@/components/Population";
import Currency from "@/components/Currency";
import Army from "@/components/Army";
import Tourism from "@/components/Tourism";
import Weather from "@/components/Weather";
import Footer from "@/components/Footer";
import Ending from "@/components/Ending";
import Popup from "@/components/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => { AOS.init({
    easing: "ease-out",
    duration: 1200,
    delay: 100,
    mirror: true,
    anchorPlacement: "top-bottom",
    offset: 160
   })
   AOS.refresh();
    
  }, []);
  return (
    <main className="flex min-h-screen flex-col bg-[#006400]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <First />
        <div id="about"><About /></div>
        <div id="capital"><Capital /></div>
        <div id="culture"><Culture /></div>
        <div id="politics"><Politics /></div>
        <div id="population"><Population /></div>
        <div id="currency"><Currency /></div>
        <div id="army"><Army /></div>
        <div id="tourism"><Tourism /></div>
        <div id="weather"><Weather /></div>
        <div id="ending"><Ending /></div>
      </div>
      <Footer />

      <Popup />
    </main>
  );
}
