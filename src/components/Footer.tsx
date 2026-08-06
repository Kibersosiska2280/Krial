
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ChevronRight, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import krialLogo from "@/assets/krial-logo.png.asset.json";

const Footer = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    
    // Здесь будет логика отправки формы
    console.log("Подписка на рассылку:", email);
    
    // Очистка формы и уведомление
    form.reset();
    toast({
      title: "Спасибо за подписку!",
      description: "Вы успешно подписались на нашу рассылку.",
    });
  };

  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О компании */}
<div className="space-y-4">
  <Link to="/" className="relative z-50 flex items-center">
    <img
      src="1123.png"
      alt="KriAl"
      className="h-10 w-auto object-contain"
    />
  </Link>
            <p className="text-white/70 text-sm">
              Производство мебели для B2B клиентов с 2015 года. Контрактное производство,
              распил ЛДСП EGGER, проектирование в БАЗИС-Мебельщик. 
              Работаем только с юридическими лицами и ИП.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent transition-colors"
                aria-label="Youtube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-white font-medium text-lg mb-6">Навигация</h4>
            <nav className="grid grid-cols-1 gap-2">
              <Link 
                to="/" 
                className="text-white/70 hover:text-accent transition-colors flex items-center text-sm"
              >
                <ChevronRight size={16} className="mr-1" />
                Главная
              </Link>
              <Link 
                to="/about" 
                className="text-white/70 hover:text-accent transition-colors flex items-center text-sm"
              >
                <ChevronRight size={16} className="mr-1" />
                О нас
              </Link>
              <Link 
                to="/projects" 
                className="text-white/70 hover:text-accent transition-colors flex items-center text-sm"
              >
                <ChevronRight size={16} className="mr-1" />
                Проекты
              </Link>
              <Link 
                to="/services" 
                className="text-white/70 hover:text-accent transition-colors flex items-center text-sm"
              >
                <ChevronRight size={16} className="mr-1" />
                Услуги
              </Link>
              <Link 
                to="/contacts" 
                className="text-white/70 hover:text-accent transition-colors flex items-center text-sm"
              >
                <ChevronRight size={16} className="mr-1" />
                Контакты
              </Link>
            </nav>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-white font-medium text-lg mb-6">Контакты</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={18} className="text-accent mt-1 mr-3 flex-shrink-0" />
                <p className="text-white/70 text-sm">
                  Пенза
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-accent mr-3 flex-shrink-0" />
                <a 
                  href="tel:+79968099181" 
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  +79968099181
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-accent mr-3 flex-shrink-0" />
                <a 
                  href="mailto:domlight@mail.ru" 
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  domlight@mail.ru
                </a>
              </div>
            </div>
          </div>

          {/* Подписка */}
          <div>
            <h4 className="text-white font-medium text-lg mb-6">Подписка на новости</h4>
            <p className="text-white/70 text-sm mb-4">
              Подпишитесь на нашу рассылку, чтобы быть в курсе последних новостей, 
              акций и специальных предложений.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input 
                type="email" 
                name="email"
                placeholder="Ваш email" 
                required
                className="w-full px-4 py-2 bg-muted border border-border rounded focus:outline-none focus:ring-1 focus:ring-accent text-white/90"
              />
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white">
                Подписаться
              </Button>
            </form>
          </div>
        </div>

        {/* Нижний footer */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-xs text-center md:text-left">
            © {new Date().getFullYear()} KriAl. Все права защищены.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-white/50 hover:text-accent text-xs transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-white/50 hover:text-accent text-xs transition-colors">
              Условия использования
            </Link>
            <Link to="/offer" className="text-white/50 hover:text-accent text-xs transition-colors">
              Публичная оферта
            </Link>
            <Link to="/cookies" className="text-white/50 hover:text-accent text-xs transition-colors">
              Cookie
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
