
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface CookieConsentProps {
  onAccept: () => void;
  onReject: () => void;
}

const CookieConsent = ({ onAccept, onReject }: CookieConsentProps) => {
  return (
    <motion.div 
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:max-w-sm z-50 glass-morphism shadow-xl"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="p-4 md:p-6 relative">
        <button 
          onClick={onReject} 
          className="absolute top-2 right-2 text-white/70 hover:text-white"
          aria-label="Закрыть"
        >
          <X size={18} />
        </button>
        
        <h4 className="text-white font-medium text-lg mb-2">Файлы Cookie</h4>
        <p className="text-white/70 text-sm mb-4">
          Мы используем файлы cookie для улучшения вашего опыта работы с сайтом. 
          Продолжая использовать наш сайт, вы соглашаетесь с нашей 
          <a href="/privacy" className="text-accent ml-1 hover:underline">
            политикой конфиденциальности
          </a>.
        </p>
        
        <div className="flex space-x-3">
          <Button 
            variant="default" 
            className="bg-accent hover:bg-accent/90 text-white flex-1"
            onClick={onAccept}
          >
            Принять все
          </Button>
          <Button 
            variant="outline" 
            className="border-border text-white/80 hover:text-white flex-1"
            onClick={onReject}
          >
            Только необходимые
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieConsent;
