
'use client';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/landing/Footer";
import FAQSection from "@/components/landing/Faqs";
import FeaturedNFTs from "@/components/landing/Nfts";
import HowItWorksSection from "@/components/landing/HowItWorks";
import AboutSection from "@/components/landing/About";
import HeroSection from "@/components/landing/Hero";


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
