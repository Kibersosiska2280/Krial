import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import krialLogo from "@/assets/krial-logo.png.asset.json";


const serviceSubPages = [
  { name: "ЛДСП EGGER", path: "/services/ldsp-egger" },
  { name: "Мебель по индивидуальным размерам", path: "/services/custom-furniture" },
  { name: "Контрактное производство", path: "/services/contract" },
  { name: "Производство для тендеров", path: "/services/tenders" },
  { name: "Проектирование мебели", path: "/services/design" },
];

const materialsSubPages = [
  { name: "Фасады МДФ", path: "/materials/mdf-facades" },
];

const cuttingSubPages = [
  { name: "Распил ЛДСП", path: "/cutting/ldsp" },
  { name: "Распил ЛДСП EGGER", path: "/cutting/ldsp-egger" },
  { name: "Кромление ЛДСП", path: "/cutting/edge-banding" },
  { name: "Сверление отверстий", path: "/cutting/drilling" },
  { name: "Раскрой мебельных деталей", path: "/cutting/furniture-cutting" },
  { name: "Распил МДФ", path: "/cutting/mdf" },
  { name: "Фрезеровка ДСП", path: "/cutting/milling" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setExpandedMobileMenu(null);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: "Главная", path: "/" },
    
    { name: "О нас", path: "/about" },
    { name: "Проекты", path: "/projects" },
    { name: "Распил", path: "/cutting", hasDropdown: true, subPages: cuttingSubPages },
    { name: "Услуги", path: "/services", hasDropdown: true, subPages: serviceSubPages },
    { name: "Материалы", path: "/materials", hasDropdown: true, subPages: materialsSubPages },
    { name: "Контакты", path: "/contacts" },
  ];

  const toggleMobileDropdown = (path: string) => {
    setExpandedMobileMenu(expandedMobileMenu === path ? null : path);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent",
      isOpen ? "!bg-background" : ""
    )}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="relative z-50 flex items-center">
            <img
              src={krialLogo.url}
              alt="KriAl"
              className="h-10 w-auto object-contain"
            />
          </Link>


          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <DropdownMenu key={link.path}>
                  <DropdownMenuTrigger className={cn(
                    "text-sm font-medium text-white/80 hover:text-white transition-colors py-1 flex items-center gap-1 outline-none",
                    location.pathname.startsWith(link.path) && "text-accent"
                  )}>
                    {link.name}
                    <ChevronDown size={14} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-secondary border-border min-w-[280px]">
                    {link.path === "/services" && (
                      <DropdownMenuItem asChild>
                        <Link to="/services" className="cursor-pointer font-medium">Все услуги</Link>
                      </DropdownMenuItem>
                    )}
                    {link.subPages?.map((subPage) => (
                      <DropdownMenuItem key={subPage.path} asChild>
                        <Link to={subPage.path} className="cursor-pointer">{subPage.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium text-white/80 hover:text-white link-underline transition-colors py-1",
                    location.pathname === link.path && "text-accent"
                  )}
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+79968099181" className="text-sm flex items-center text-white/80 hover:text-white transition-colors">
              <Phone size={16} className="mr-2 text-accent" />
              <span>+79968099181</span>
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center md:hidden space-x-2">
            <button className="relative z-50" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}>
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={24} className="text-white" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={24} className="text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile menu */}
        </div>
      </div>

      {/* Mobile menu - rendered outside header content flow */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] md:hidden"
            style={{ backgroundColor: 'hsl(240, 10%, 3.9%)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header area with logo and close button */}
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              <Link to="/" className="flex items-center">
                <img
                  src={krialLogo.url}
                  alt="KriAl"
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <div className="flex items-center space-x-2">
                
                <button onClick={() => setIsOpen(false)} aria-label="Закрыть меню">
                  <X size={24} className="text-white" />
                </button>
              </div>
            </div>

            <div className="container mx-auto px-4 pb-8 overflow-y-auto" style={{ height: 'calc(100vh - 72px)' }}>
              <div className="flex flex-col space-y-1 mt-4">
                {navLinks.map((link) => (
                  <div key={link.path}>
                    {link.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => toggleMobileDropdown(link.path)}
                          className={cn(
                            "text-xl font-medium w-full text-left py-3 border-b border-border flex items-center justify-between",
                            location.pathname.startsWith(link.path) ? "text-accent" : "text-white/80"
                          )}
                        >
                          {link.name}
                          <ChevronDown size={18} className={cn(
                            "transition-transform duration-200",
                            expandedMobileMenu === link.path && "rotate-180"
                          )} />
                        </button>
                        <AnimatePresence>
                          {expandedMobileMenu === link.path && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 py-2 space-y-1">
                                {link.subPages?.map((subPage) => (
                                  <Link
                                    key={subPage.path}
                                    to={subPage.path}
                                    className={cn(
                                      "text-base block py-2 text-white/60 hover:text-accent",
                                      location.pathname === subPage.path && "text-accent"
                                    )}
                                  >
                                    {subPage.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        className={cn(
                          "text-xl font-medium block py-3 border-b border-border",
                          location.pathname === link.path ? "text-accent" : "text-white/80 hover:text-white"
                        )}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="py-8 space-y-4">
                <a href="tel:+79968099181" className="text-base flex items-center text-white/80 hover:text-white transition-colors">
                  <Phone size={18} className="mr-2 text-accent" />
                  <span>+79968099181</span>
                </a>
                <a href="mailto:domlight@mail.ru" className="text-base flex items-center text-white/80 hover:text-white transition-colors">
                  <Mail size={18} className="mr-2 text-accent" />
                  <span>domlight@mail.ru</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
