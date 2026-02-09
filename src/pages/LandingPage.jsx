import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ServiceGrid from "../components/ServiceGrid";
import OpportunityBoard from "../components/OpportunityBoard";
import InterviewFAQ from "../components/InterviewFAQ"; 
import Footer from "../components/Footer";
import WhatsAppFAB from "../components/WhatsAppFAB";
import AuthModal from "../components/AuthModal"; 

export default function LandingPage() {
  const { hash } = useLocation();
  
  // State za kitalamu za kudhibiti ulinzi na safari ya mtumiaji
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [showLogin, setShowLogin] = useState(false);
  const [redirectPath, setRedirectPath] = useState("/"); // MABORESHO: Inatunza kule user anapotaka kwenda

  // MABORESHO: Function inayokumbuka path kabla ya kufungua Login
  const handleOpenLogin = (path = "/dashboard") => {
    setRedirectPath(path);
    setShowLogin(true);
  };

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-white font-jakarta relative">
      {/* Header sasa inatuma path ya dashboard kama default */}
      <Header onOpenLogin={() => handleOpenLogin("/dashboard")} isLoggedIn={isLoggedIn} />
      
      <main className="relative z-10">
        <Hero />
        
        {/* ServiceGrid itakuwa inatuma path maalum (mfano /cv-builder) */}
        <ServiceGrid 
          onOpenLogin={handleOpenLogin} 
          isLoggedIn={isLoggedIn} 
        />
        
        <OpportunityBoard />
        <InterviewFAQ /> 
      </main>
      
      <Footer />
      <WhatsAppFAB />

      {/* MABORESHO: Tunapitisha redirectPath ili AuthModal ijue inapopeleka mtu akishalogin */}
      {showLogin && (
        <AuthModal 
          showLogin={showLogin} 
          redirectPath={redirectPath}
          onClose={() => setShowLogin(false)} 
          onSuccess={() => {
            setIsLoggedIn(true);
            setShowLogin(false);
          }}
        />
      )}
    </div>
  );
}