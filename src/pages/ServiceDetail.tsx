
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Service } from "@/components/ServiceCard";
import ServiceCard from "@/components/ServiceCard";

// Примеры услуг с подробной информацией
const services: Service[] = [
  {
    id: "design",
    title: "Дизайн проект",
    description: "Разработка индивидуального дизайн-проекта для вашего интерьера",
    icon: "🎨",
    link: "/services/design",
    details: `
      <p>Наша команда профессиональных дизайнеров создаст для вас уникальный дизайн-проект, который отразит вашу индивидуальность и соответствует всем современным тенденциям.</p>
      <p>Дизайн-проект включает в себя:</p>
      <ul>
        <li>Планировочное решение пространства</li>
        <li>3D-визуализация всех помещений</li>
        <li>Подбор материалов и мебели</li>
        <li>Рабочие чертежи для строителей</li>
        <li>Спецификации материалов и мебели</li>
      </ul>
      <p>Мы учтем все ваши пожелания и создадим пространство, которое будет не только эстетически привлекательным, но и функциональным.</p>
    `
  },
  {
    id: "production",
    title: "Изготовление мебели",
    description: "Создание уникальной мебели по индивидуальным заказам",
    icon: "🔨",
    link: "/services/production",
    details: `
      <p>Мы производим мебель в стиле лофт по индивидуальным заказам. Каждое изделие создается с учетом всех пожеланий клиента и особенностей помещения.</p>
      <p>Наше производство оснащено современным оборудованием, что позволяет выполнять заказы любой сложности.</p>
      <p>Этапы изготовления мебели:</p>
      <ul>
        <li>Консультация и разработка концепции</li>
        <li>Создание эскизов и 3D-моделей</li>
        <li>Выбор материалов и фурнитуры</li>
        <li>Изготовление изделия</li>
        <li>Доставка и установка</li>
      </ul>
      <p>Мы используем только качественные материалы, что гарантирует долговечность и надежность нашей мебели.</p>
    `
  },
  {
    id: "installation",
    title: "Установка и монтаж",
    description: "Профессиональная установка и монтаж мебели и конструкций",
    icon: "🏢",
    link: "/services/installation",
    details: `
      <p>Наша компания предоставляет услуги по профессиональной установке и монтажу мебели и конструкций.</p>
      <p>Команда опытных специалистов выполнит все работы быстро и качественно, сохраняя первоначальный вид и функциональность изделий.</p>
      <p>Мы осуществляем:</p>
      <ul>
        <li>Сборку и установку мебели</li>
        <li>Монтаж перегородок и конструкций</li>
        <li>Установку осветительных приборов</li>
        <li>Подключение бытовой техники</li>
        <li>Финальную регулировку и настройку</li>
      </ul>
      <p>Все работы проводятся с соблюдением технических норм и требований безопасности.</p>
    `
  },
  {
    id: "restoration",
    title: "Ремонт и реставрация",
    description: "Восстановление и обновление мебели и интерьерных элементов",
    icon: "♻️",
    link: "/services/restoration",
    details: `
      <p>Мы предлагаем услуги по ремонту и реставрации мебели и интерьерных элементов.</p>
      <p>Наши мастера вернут вашей мебели первоначальный вид или придадут ей новый облик в соответствии с вашими пожеланиями.</p>
      <p>Виды работ:</p>
      <ul>
        <li>Восстановление поврежденных поверхностей</li>
        <li>Замена фурнитуры и механизмов</li>
        <li>Перетяжка мягкой мебели</li>
        <li>Окраска и патинирование</li>
        <li>Обновление дизайна</li>
      </ul>
      <p>Мы подарим вашей мебели вторую жизнь, сохранив ее уникальность и повысив функциональность.</p>
    `
  },
  {
    id: "consultation",
    title: "Консультация дизайнера",
    description: "Профессиональная консультация по вопросам дизайна и планировки",
    icon: "💬",
    link: "/services/consultation",
    details: `
      <p>Наша компания предлагает услуги консультации профессионального дизайнера.</p>
      <p>Во время консультации вы сможете получить ответы на все интересующие вас вопросы по обустройству пространства, выбору стиля, материалов и мебели.</p>
      <p>Консультация включает:</p>
      <ul>
        <li>Анализ пространства и его возможностей</li>
        <li>Рекомендации по планировке и зонированию</li>
        <li>Советы по выбору стиля и цветовой гаммы</li>
        <li>Подбор материалов и мебели</li>
        <li>Рекомендации по освещению</li>
      </ul>
      <p>После консультации вы получите четкое представление о том, как можно преобразить ваше пространство и создать интерьер вашей мечты.</p>
    `
  },
  {
    id: "complex",
    title: "Комплексное оснащение объектов",
    description: "Полное оснащение объектов мебелью и элементами декора под ключ",
    icon: "🏗️",
    link: "/services/complex",
    details: `
      <p>Мы предлагаем комплексное оснащение жилых и коммерческих объектов под ключ.</p>
      <p>Наша команда берет на себя все этапы работы: от проектирования до установки готовых изделий.</p>
      <p>Комплексное оснащение включает:</p>
      <ul>
        <li>Анализ помещения и потребностей клиента</li>
        <li>Разработку концепции оформления</li>
        <li>Создание дизайн-проекта</li>
        <li>Производство всех элементов интерьера</li>
        <li>Доставку и монтаж</li>
        <li>Гарантийное обслуживание</li>
      </ul>
      <p>Такой подход позволяет создать гармоничное пространство, где все элементы сочетаются между собой и работают на общую концепцию.</p>
    `
  },
  {
    id: "decor",
    title: "Изготовление декора",
    description: "Создание уникальных декоративных элементов для вашего интерьера",
    icon: "✨",
    link: "/services/decor",
    details: `
      <p>Наша студия специализируется на создании уникальных декоративных элементов, которые станут завершающим штрихом в вашем интерьере.</p>
      <p>Мы изготавливаем декоративные элементы по индивидуальным проектам, учитывая особенности вашего пространства и общую стилистику.</p>
      <p>Виды декоративных элементов:</p>
      <ul>
        <li>Настенные панно и инсталляции</li>
        <li>Декоративные перегородки</li>
        <li>Авторские светильники</li>
        <li>Зеркала в дизайнерских рамах</li>
        <li>Полки необычной формы</li>
        <li>Декоративные вазы и кашпо</li>
      </ul>
      <p>Каждое изделие уникально и создается вручную нашими мастерами, что гарантирует эксклюзивность и высокое качество.</p>
    `
  }
];

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundService = services.find(s => s.id === id);
    setService(foundService || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-12 flex justify-center items-center min-h-screen">
        <div className="animate-spin w-12 h-12 border-t-2 border-accent rounded-full"></div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-12 text-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Услуга не найдена</h1>
        <p className="mb-6">К сожалению, запрашиваемая услуга не существует.</p>
        <Link to="/services" className="text-accent hover:underline">
          Вернуться к списку услуг
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-12 min-h-screen">
      <div className="mb-8">
        <Link to="/services" className="text-accent hover:underline inline-flex items-center">
          <ArrowLeft size={16} className="mr-2" />
          Назад к услугам
        </Link>
      </div>

      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold">{service.title}</h1>
        </motion.div>
        <motion.p 
          className="text-xl text-white/70 mt-4 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {service.description}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <motion.div 
          className="lg:col-span-2 prose prose-invert prose-lg max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          dangerouslySetInnerHTML={{ 
            __html: service.details || 'Информация об услуге отсутствует.'
          }}
        />
        
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-secondary border border-border rounded-lg p-6">
            <h3 className="text-xl font-medium mb-4">Получить консультацию</h3>
            <p className="text-white/70 mb-6">
              Оставьте заявку, и наш специалист свяжется с вами для обсуждения деталей и стоимости услуги.
            </p>
            <Button 
              className="w-full bg-accent hover:bg-accent/90"
              onClick={() => console.log("Заявка отправлена")}
            >
              Оставить заявку
            </Button>
          </div>

          <div className="bg-secondary/50 border border-border rounded-lg p-6">
            <h3 className="text-xl font-medium mb-4">Преимущества работы с нами</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check size={18} className="text-accent shrink-0 mt-1 mr-2" />
                <span>Команда опытных профессионалов</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-accent shrink-0 mt-1 mr-2" />
                <span>Индивидуальный подход к каждому клиенту</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-accent shrink-0 mt-1 mr-2" />
                <span>Соблюдение сроков выполнения работ</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-accent shrink-0 mt-1 mr-2" />
                <span>Гарантия качества</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-6">Другие услуги</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services
            .filter(s => s.id !== service.id)
            .slice(0, 3)
            .map((otherService, index) => (
              <ServiceCard 
                key={otherService.id}
                service={otherService}
                index={index}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
