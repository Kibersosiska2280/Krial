import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { Service } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

import servicesBenefitsImg from "@/assets/services-benefits.jpg";

const Services = () => {
  const services: Service[] = [
    {
      id: "1",
      title: "Контрактное производство",
      description: "Производим мебель под маркой заказчика. Проектирование, изготовление, комплектация фурнитурой.",
      icon: "🏭",
      link: "/services/contract",
      details: "Полный цикл производства мебели для бизнеса. Работаем с дизайн-студиями, магазинами мебели, компаниями ремонта под ключ."
    },
    {
      id: "2",
      title: "Производство для тендеров",
      description: "Работаем с аукционной документацией и техническими заданиями любой сложности.",
      icon: "📋",
      link: "/services/tenders",
      details: "Производим мебель для школ, больниц, администраций, бизнес-центров. Работаем с НДС, полный пакет документов."
    },
    {
      id: "3",
      title: "Проектирование мебели",
      description: "Разрабатываем чертежи в БАЗИС-Мебельщик, рассчитываем комплектующие.",
      icon: "✏️",
      link: "/services/design",
      details: "Конструкторский отдел из 10 человек. Проектирование с присадкой под любую фурнитуру. Подробные сметы."
    },
    {
      id: "4",
      title: "Распил ЛДСП EGGER",
      description: "95 декоров на складе. Распил, кромление, сверление на ЧПУ оборудовании.",
      icon: "🪚",
      link: "/cutting/ldsp",
      details: "Работаем с плитой и кромкой EGGER. Толщины 8, 10, 16, 25, 32 мм. Срок производства 11 дней."
    },
    {
      id: "5",
      title: "Фасады МДФ",
      description: "Мебельные фасады с пленкой ПВХ, готовые к установке с присадкой.",
      icon: "🚪",
      link: "/materials/mdf-facades",
      details: "Стандартные и нестандартные модели. Широкий выбор декоров. Интегрированные ручки."
    },
  
  ];

  return (
    <div className="container mx-auto px-4 pt-28 pb-12 space-y-24">
      {/* Заголовок страницы */}
      <section>
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">Наши услуги</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Полный спектр услуг по производству мебели для B2B клиентов — 
            от проектирования до доставки готового комплекта.
          </p>
        </motion.div>
      </section>

      {/* Основные услуги */}
      <section className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Преимущества */}
      <section className="space-y-8">
        <SectionTitle 
          title="Почему выбирают нас" 
          subtitle="Преимущества работы с ДомЛайт"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              "11 лет на рынке, 59 500+ выполненных проектов",
              "ЧПУ оборудование KDT — высокое качество обработки",
              "95 декоров EGGER постоянно на складе",
              "Срок производства 11 дней для материалов со склада",
              "Работаем с НДС, полный пакет документов",
              "Доставка с подъёмом по Кузнецку и области"
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="flex items-start"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mr-3 mt-1 text-accent">
                  <Check size={18} />
                </div>
                <p>{item}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            className="relative aspect-square md:aspect-auto rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img 
              src={servicesBenefitsImg}
              alt="Наши преимущества" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Процесс работы */}
      <section className="space-y-8">
        <SectionTitle 
          title="Как мы работаем" 
          subtitle="Процесс выполнения заказа"
        />
        
        <div className="relative">
          <div className="absolute left-[25px] md:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          
          {[
            {
              step: "01",
              title: "Заявка",
              description: "Отправьте чертёж, ТЗ или опишите задачу. Расчёт стоимости в течение дня."
            },
            {
              step: "02",
              title: "Проектирование",
              description: "Разрабатываем чертежи в БАЗИС-Мебельщик, согласуем с вами."
            },
            {
              step: "03",
              title: "Согласование",
              description: "Утверждаем чертежи, материалы, фурнитуру. Выставляем счёт."
            },
            {
              step: "04",
              title: "Производство",
              description: "Изготавливаем на ЧПУ оборудовании. Срок 11 дней для материалов со склада."
            },
            {
              step: "05",
              title: "Доставка",
              description: "Доставляем готовый комплект с подъёмом. Кузнецк и Пензенская область."
            }
          ].map((step, index) => (
            <motion.div 
              key={index}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 last:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className={`md:text-right ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <div className="flex items-center md:justify-end mb-2">
                  <div className="flex md:hidden items-center justify-center bg-accent text-white rounded-full w-10 h-10 mr-3 font-medium">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-medium">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              <div className="hidden md:flex justify-center items-center relative z-10">
                <div className="bg-accent text-white rounded-full w-12 h-12 flex items-center justify-center font-medium">
                  {step.step}
                </div>
              </div>
              
              <div className={index % 2 !== 0 ? 'md:order-1' : 'hidden md:block'}></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* B2B Notice */}
      <section className="bg-accent/10 rounded-xl p-8 md:p-12 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          Принимаем заказы от юр. лиц и ИП
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Мы принимаем заказы от юридических лиц (ЮЛ) и ИП, чья деятельность связана с продажей, 
          комплектацией, производством мебели. Цены на сайте действительны для ЮЛ и ИП.
        </p>
        <Button 
          size="lg" 
          className="bg-accent hover:bg-accent/90"
          onClick={() => window.location.href = "/contacts"}
        >
          Стать партнёром
        </Button>
      </section>

      {/* FAQ */}
      <section className="space-y-8" id="faq">
        <SectionTitle 
          title="Часто задаваемые вопросы" 
          subtitle="Ответы на популярные вопросы наших партнёров"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              question: "Какой минимальный заказ?",
              answer: "Для постоянных клиентов минимального заказа нет. Для заказных материалов попросим выкупить лист."
            },
            {
              question: "Какой срок производства?",
              answer: "11 рабочих дней для материалов со складской программы. Для заказных декоров EGGER срок +5 рабочих дней."
            },
            {
              question: "Работаете с НДС?",
              answer: "Да, работаем с НДС. Предоставляем полный пакет документов для бухгалтерии."
            },
            {
              question: "Есть доставка в регионы?",
              answer: "Да, доставляем по всей России. Подъём и занос — по Кузнецку и Пензенской области."
            },
          ].map((faq, index) => (
            <motion.div 
              key={index}
              className="bg-secondary/30 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-medium mb-2">{faq.question}</h4>
              <p className="text-muted-foreground">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
