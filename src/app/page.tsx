
'use client';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Fotter";
import FAQSection from "./components/Faqs";
import FeaturedNFTs from "./components/Nfts";
import HowItWorksSection from "./components/HowItWorks";
import AboutSection from "./components/About";
import HeroSection from "./components/Hero";


export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-black text-white">
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <FeaturedNFTs />
      <FAQSection />
      <Footer />
    </main>
  );
}
