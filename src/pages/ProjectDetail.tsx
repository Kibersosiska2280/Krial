
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Project } from "@/components/ProjectCard";

// Импорт локальных фото для галерей проектов
import foto1 from "@/assets/1.jpg";
import foto2 from "@/assets/2.jpg";
import foto3 from "@/assets/3.jpg";
import foto4 from "@/assets/4.jpg";
import foto5 from "@/assets/5.jpeg";
import foto6 from "@/assets/6.jpg";
import foto7 from "@/assets/7.jpg";
import foto8 from "@/assets/8.jpg";
import foto9 from "@/assets/9.jpg";
import foto10 from "@/assets/10.jpg";
import foto11 from "@/assets/11.jpg";
import foto12 from "@/assets/12.jpg";
import foto13 from "@/assets/13.jpg";
import foto14 from "@/assets/14.jpg";
import foto15 from "@/assets/15.jpg";
import foto16 from "@/assets/16.jpg";
import foto17 from "@/assets/17.jpg";
import foto18 from "@/assets/18.jpg";
import foto19 from "@/assets/19.jpg";
import foto20 from "@/assets/20.jpg";
import foto21 from "@/assets/21.jpg";
import foto22 from "@/assets/22.jpg";
import foto23 from "@/assets/23.jpg";
import foto24 from "@/assets/24.jpg";
import foto25 from "@/assets/25.jpg";
import foto26 from "@/assets/26.jpg";
import foto27 from "@/assets/27.jpg";
import foto28 from "@/assets/28.jpg";
import foto29 from "@/assets/29.jpg";
import foto30 from "@/assets/30.jpg";
import foto31 from "@/assets/31.jpg";
import foto32 from "@/assets/32.jpg";
import foto33 from "@/assets/33.jpg";
import foto34 from "@/assets/34.jpg";

// Галереи для каждого проекта (уникальные фото)
const projectGalleries: Record<string, string[]> = {
  "kids": [
    foto1,
    foto2,
    foto3,
    foto4,
  ],
  "mebel-studio": [
    foto8,
    foto9,
    foto10,
    foto11,
  ],
  "working-zona": [
    foto13,
    foto14,
    foto16,
    foto18,
  ],
  "kitchen": [
    foto19,
    foto20,
    foto21,
    foto23,
  ],
  "hallway": [
    foto24,
    foto26,
    foto27,
    foto28,
  ],
  "kids-mebel": [
    foto30,
    foto32,
    foto33,
    foto34,
  ]
};

// Примеры проектов с подробной информацией (те же, что и в Projects.tsx)
const projects: Project[] = [
  {
    id: "kids",
    title: "Мебель в детскую комнату",
    description: "Индивидуальное изготовление мебели для детской комнаты девочки. Проект включал создание кровати, шкафа, рабочей зоны и систем хранения с учётом эргономики, безопасности и возрастных особенностей ребёнка.",
    image: foto6,
    category: "Дом",
    year: "2024",
    link: "/projects/kids",
    details: "Проект включал изготовление корпусной мебели и обустройство детской комнаты для девочки. Реализованы: кровать с мягким изголовьем, вещевые шкафы с зеркальными и декоративными фасадами, многофункциональная рабочая зона с хранением и письменным столом, декоративные элементы с контурной LED-подсветкой."
  },
  {
    id: "mebel-studio",
    title: "Мебель в квартиру-студию",
    description: "Индивидуальное изготовление мебели для квартиры-студии.",
    image: foto7,
    category: "Студии",
    year: "2025",
    link: "/projects/mebel-studio",
    details: "Проект включал изготовление корпусной мебели и обустройство квартиры-студии. Реализованы: трансформируемая кровать-шкаф, модульная кухонная зона, вместительные системы хранения и рабочее место с подсветкой."
  },
  {
    id: "working-zona",
    title: "Рабочая зона у окна",
    description: "Индивидуальное изготовление мебели для рабочей зоны у окна от фабрики «ДомЛайт».",
    image: foto14,
    category: "Рабочие зоны",
    year: "2023",
    link: "/projects/working-zona",
    details: "Проект включал изготовление корпусной мебели и обустройство рабочей зоны у окна. Реализованы: письменный стол с встроенной розеткой, вещевой шкаф, выдвижные ящики и системы хранения для документов и аксессуаров."
  },
  {
    id: "kitchen",
    title: "Кухня на заказ",
    description: "Индивидуальное изготовление кухни на заказ. Создание модульной кухонной гарнитуры.",
    image: foto22,
    category: "Кухни",
    year: "2025",
    link: "/projects/kitchen",
    details: "Проект включал изготовление корпусной мебели и обустройство кухни на заказ. Реализованы: модульный кухонный гарнитур, рабочая зона с вместительными ящиками, системы хранения для посуды и мелкой техники, обеденная зона."
  },
  {
    id: "hallway",
    title: "Мебель в прихожую",
    description: "Индивидуальное изготовление мебели для прихожей. ",
    image: foto25,
    category: "Прихожие",
    year: "2023",
    link: "/projects/hallway",
    details: "Проект включал изготовление корпусной мебели и обустройство прихожей. Реализованы: встроенный шкаф, зона макияжа с зеркалом, компактный столик и тумбочка для мелочей с учётом эргономики, функциональности и стиля интерьера."
  },
  {
    id: "kids-mebel",
    title: "Мебель в детскую для близнецов",
    description: "Индивидуальное изготовление мебели для детской комнаты на двоих.",
    image: foto31,
    category: "Дом",
    year: "2023",
    link: "/projects/kids-mebel",
    details: "Проект включал изготовление корпусной мебели и обустройство детской комнаты для двоих. Реализованы: две односпальные кровати, общий рабочий стол, вместительные шкафы для одежды и игрушек, системы хранения и ТВ-зона с полками для гаджетов и аксессуаров."
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Находим проект по id из параметров URL
    const foundProject = projects.find(p => p.id === id);
    setProject(foundProject || null);
    
    // Находим связанные проекты (проекты той же категории)
    if (foundProject) {
      const related = projects
        .filter(p => p.category === foundProject.category && p.id !== foundProject.id)
        .slice(0, 3);
      setRelatedProjects(related);
    }
    
    setLoading(false);
  }, [id]);

  // Получаем галерею для текущего проекта
  const galleryImages = id ? projectGalleries[id] || [] : [];

  if (loading) {
    return <div className="container mx-auto px-4 pt-24 pb-12 min-h-screen flex items-center justify-center">
      <p className="text-xl text-white/70">Загрузка...</p>
    </div>;
  }

  if (!project) {
    return <div className="container mx-auto px-4 pt-24 pb-12 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Проект не найден</h1>
      <p className="text-xl text-white/70 mb-8">Запрашиваемый проект не существует или был удален.</p>
      <Button 
        className="bg-accent hover:bg-accent/90"
        onClick={() => window.location.href = "/projects"}
      >
        Вернуться к списку проектов
      </Button>
    </div>;
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-12 min-h-screen">
      {/* Навигация */}
      <div className="mb-8">
        <Link to="/projects" className="text-accent hover:underline inline-flex items-center">
          <ArrowLeft size={16} className="mr-2" />
          Назад к проектам
        </Link>
      </div>

      {/* Заголовок проекта */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center text-white/70">
            <Calendar size={16} className="mr-2" />
            <span>{project.year}</span>
          </div>
          <div className="flex items-center text-white/70">
            <MapPin size={16} className="mr-2" />
            <span>{project.category}</span>
          </div>
        </div>
        <p className="text-xl text-white/70 max-w-3xl">{project.description}</p>
      </motion.div>

      {/* Главное изображение */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12 rounded-lg overflow-hidden"
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-auto" 
        />
      </motion.div>

      {/* Содержимое проекта */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
        <motion.div 
          className="lg:col-span-2 prose prose-invert prose-lg max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>О проекте</h2>
          {project.details.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Характеристики проекта */}
          <div className="bg-secondary/50 border border-border rounded-lg p-6">
            <h3 className="text-xl font-medium mb-4">Характеристики проекта</h3>
            <ul className="space-y-3">
              {[
                ["Категория", project.category],
                ["Год реализации", project.year],
                ["Площадь", "45 м²"],
                ["Срок реализации", "3 месяца"],
                ["Стиль", "Лофт, Индустриальный"]
              ].map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span className="text-white/60">{item[0]}</span>
                  <span className="text-white font-medium">{item[1]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Похожие проекты */}
          <div className="bg-secondary/30 border border-border rounded-lg p-6">
            <h3 className="text-xl font-medium mb-4">Хотите похожий проект?</h3>
            <p className="text-white/70 mb-6">
              Мы можем реализовать аналогичный проект с учетом ваших индивидуальных требований и пожеланий.
            </p>
            <Button 
              className="w-full bg-accent hover:bg-accent/90"
              onClick={() => window.location.href = "/contacts"}
            >
              Обсудить проект
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Галерея проекта */}
      {galleryImages.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Галерея проекта</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden aspect-video">
                <img 
                  src={image} 
                  alt={`${project.title} - изображение ${index + 1}`} 
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Похожие проекты */}
      {relatedProjects.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Похожие проекты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((relProject, index) => (
              <Link key={relProject.id} to={relProject.link} className="block group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="rounded-lg overflow-hidden"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={relProject.image} 
                      alt={relProject.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-sm text-accent">{relProject.category}</span>
                    <h3 className="text-lg font-medium group-hover:text-accent transition-colors">
                      {relProject.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-accent text-white rounded-xl p-8 md:p-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Готовы обсудить ваш проект?</h2>
        <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
          Если вам понравился этот проект, или у вас есть собственная идея, которую вы хотите воплотить в жизнь, свяжитесь с нами для консультации.
        </p>
        <Button 
          className="bg-white text-accent hover:bg-white/90 px-6 py-3"
          onClick={() => window.location.href = "/contacts"}
        >
          Связаться с нами
        </Button>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
