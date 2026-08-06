import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/components/ProjectCard";

import projectOfficeImg from "@/assets/kidsroom1.jpg";
import projectClinicImg from "@/assets/Studia.jpg";
import projectCoworkingImg from "@/assets/workingz.jpg";
import projectSchoolImg from "@/assets/projekt123.jpg";
import projectHotelImg from "@/assets/hallway.jpg";
import projectCustomImg from "@/assets/kidsroom.jpg";
import testimonialIvanImg from "@/assets/Windows10.png";
import testimonialAnnaImg from "@/assets/Windows10.png";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  const projects: Project[] = [
    {
      id: "1",
      title: "Мебель в детскую",
      description: "Проект включал изготовление корпусной мебели и обустройство детской комнаты для девочки.",
      image: projectOfficeImg,
      category: "Дом",
      year: "2024",
      link: "/projects/kids",
      details: "Проект включал в себя полное оформление детской комнаты площадью 30 м². Срок реализации — 3 недели. Дизайн выполнен в стиле модерн/современный."
    },
    {
      id: "2",
      title: "Мебель в квартиру-студию",
      description: "Проект с акцентом на комфорт и удобство.",
      image: projectClinicImg,
      category: "Студии",
      year: "2025",
      link: "/projects/mebel-studio",
      details: "Проект включал изготовление корпусной мебели и обустройство квартиры-студии. Реализованы: трансформируемая кровать-шкаф, модульная кухонная зона, вместительные системы хранения и рабочее место."
    },
    {
      id: "3",
      title: "Рабочая зона у окна",
      description: "Проект с яркими акцентами и функциональным дизайном. Безопасность и комфорт – наши приоритеты.",
      image: projectCoworkingImg,
      category: "Рабочие зоны",
      year: "2023",
      link: "/projects/working-zona",
      details: "Проект включал изготовление корпусной мебели и обустройство рабочей зоны у окна. Реализованы: письменный стол с встроенной розеткой, вещевой шкаф, выдвижные ящики и системы хранения для документов и аксессуаров."
    },
    {
      id: "4",
      title: "Кухня на заказ",
      description: "Проект с акцентом на комфорт жильцов.",
      image: projectSchoolImg,
      category: "Кухни",
      year: "2025",
      link: "/projects/kitchen",
      details: "Проект включал изготовление корпусной мебели и обустройство кухни на заказ."
    },
    {
      id: "5",
      title: "Мебель в прихожую",
      description: "Проект с акцентом на функциональность и практичность. Использованы материалы, устойчивые к износу.",
      image: projectHotelImg,
      category: "Прихожие",
      year: "2023",
      link: "/projects/hallway",
      details: "Проект включал создание встроенного шкафа, зоны макияжа с зеркалом, компактного столика и тумбочки с учётом эргономики, функциональности и стиля интерьера."
    },
    {
      id: "6",
      title: "Мебель в детскую для близнецов",
      description: "Индивидуальное изготовление мебели для детской комнаты на двоих.",
      image: projectCustomImg,
      category: "Дом",
      year: "2022",
      link: "/projects/kids-mebel",
      details: "Индивидуальное изготовление мебели для детской комнаты на двоих. Проект включал создание двух кроватей, общего рабочего стола, вместительных шкафов, систем хранения и ТВ-зоны с учётом эргономики"
    }
  ];

  const categories = ["Все", "Кухни", "Дом", "Студии", "Рабочие зоны", "Прихожие", "Контракт"];

  useEffect(() => {
    if (activeCategory === "Все") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeCategory)
      );
    }
  }, [activeCategory]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="container mx-auto px-4 pt-28 pb-12 space-y-24">
      {/* Заголовок */}
      <section>
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">Наши проекты</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            За 11 лет работы мы выполнили более 59 500 проектов для B2B клиентов. 
            Здесь представлены некоторые из наших работ.
          </p>
        </motion.div>
      </section>

      {/* Фильтр */}
      <section>
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category
                  ? "bg-accent text-white"
                  : "bg-secondary/30 hover:bg-accent hover:text-white"
              } transition-colors`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Проекты */}
      <section className="space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-white/70">По выбранной категории проектов не найдено.</p>
            <Button 
              className="mt-4 bg-accent hover:bg-accent/90"
              onClick={() => setActiveCategory("Все")}
            >
              Показать все проекты
            </Button>
          </div>
        )}
      </section>

      {/* Индивидуальные проекты */}
      <section className="bg-secondary/20 rounded-xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">Ваш проект — следующий?</h2>
            <p className="text-muted-foreground">
              Мы работаем с проектами любой сложности: от небольших заказов 
              до комплексного оснащения крупных объектов. 
            </p>
            <p className="text-muted-foreground">
              Отправьте техническое задание или опишите задачу — 
              мы подготовим расчёт в течение дня.
            </p>
            <Button 
              className="bg-accent hover:bg-accent/90 text-white px-5 py-2 rounded-lg"
              onClick={() => window.location.href = "/contacts"}
            >
              Обсудить проект
            </Button>
          </motion.div>
          
          <motion.div
            className="aspect-square md:aspect-auto rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img 
              src={projectCustomImg}
              alt="Индивидуальный проект" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="space-y-8">
        <SectionTitle 
          title="Что говорят наши партнёры" 
          subtitle="Отзывы о сотрудничестве с ДомЛайт"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              quote: "Команда ДомЛайт превзошла все наши ожидания. Они создали уникальный интерьер для нашего офиса, который отражает ценности нашей компании и создает комфортную атмосферу для работы.",
              author: "Иван Соколов",
              company: "IT Solutions",
              image: testimonialIvanImg
            },
            {
              quote: "Сотрудничество с ДомЛайт было настоящим удовольствием. Профессиональный подход, внимание к деталям и точное соблюдение сроков – все это делает их идеальным партнером для тендерных проектов.",
              author: "Анна Морозова",
              company: "Администрация района",
              image: testimonialAnnaImg
            }
          ].map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-background border border-border rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
