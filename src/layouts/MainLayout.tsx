
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import CallbackButton from "@/components/CallbackButton";
import { AnimatePresence, motion } from "framer-motion";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Проверяем, было ли уже принято соглашение о куках
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Показываем баннер через небольшую задержку
      const timer = setTimeout(() => {
        setShowCookieConsent(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Имитация загрузки страницы
    setIsLoaded(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowCookieConsent(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowCookieConsent(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <AnimatePresence>
        {!isLoaded ? (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          >
            <div className="flex flex-col items-center">
              <div className="animate-slow-spin w-16 h-16 border-t-2 border-accent rounded-full"></div>
              <p className="mt-4 text-lg font-light">ЛОФТ ДИЗАЙН</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Navbar />
      
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>
      
      <Footer />

      <CallbackButton />

      <AnimatePresence>
        {showCookieConsent && (
          <CookieConsent
            onAccept={acceptCookies}
            onReject={rejectCookies}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainLayout;
