import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import aboutWorkshopImg from "@/assets/about-workshop.jpg";
import aboutProductionImg from "@/assets/manager.png";
import teamDirectorImg from "@/assets/team-director.jpg";
import teamDesignImg from "@/assets/team-design.jpg";
import teamProductionImg from "@/assets/team-production.jpg";
import teamSalesImg from "@/assets/team-sales.jpg";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 pt-28 pb-12 space-y-24">
      {/* Секция О нас */}
      <section className="space-y-8">
        <SectionTitle 
          title="О компании" 
          subtitle="KriAl_mebel — ваш надёжный партнёр в производстве мебели для бизнеса"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-medium mb-4">Кто мы</h3>
            <p className="text-muted-foreground mb-4">
              Компания «KriAl_mebel» была основана в 2015 году. За 11 лет работы мы выросли 
              из небольшого производства до фабрики с промышленным ЧПУ оборудованием 
              и цехом площадью 4000 м².
            </p>
            <p className="text-muted-foreground">
              Мы специализируемся на контрактном производстве мебели для B2B клиентов: 
              магазинов мебели, дизайн-студий, исполнителей тендеров и компаний по ремонту под ключ.
            </p>
          </motion.div>
          
          <motion.div
            className="relative aspect-video rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img 
              src={aboutWorkshopImg} 
              alt="Наша мастерская" 
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Секция Миссия */}
      <section className="space-y-8">
        <SectionTitle 
          title="Наша миссия" 
          subtitle="Помогаем бизнесу зарабатывать на мебели"
        />
        
        <div className="bg-secondary/20 rounded-xl p-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xl leading-relaxed italic">
              "Наша миссия — дать возможность бизнесу продавать мебель без собственного производства. 
              Мы берём на себя проектирование, изготовление, комплектацию и доставку — 
              вам остаётся только продавать."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Секция Ценности */}
      <section className="space-y-8">
        <SectionTitle 
          title="Наши ценности" 
          subtitle="Принципы, которыми мы руководствуемся каждый день"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Качество",
              description: "Используем материалы EGGER, оборудование KDT. Контролируем каждый этап производства.",
              icon: "✓"
            },
            {
              title: "Надёжность",
              description: "11 лет на рынке, 59 500+ выполненных проектов. Работаем с НДС, полный пакет документов.",
              icon: "✧"
            },
            {
              title: "Партнёрство",
              description: "Каждому клиенту — персональный менеджер. Гибкие условия, помощь в проектировании.",
              icon: "♦"
            },
          ].map((value, index) => (
            <motion.div 
              key={index}
              className="bg-background border border-border rounded-lg p-6 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-accent/10 text-accent rounded-full mb-4 text-xl">
                {value.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* История компании */}
      <section className="space-y-8">
        <SectionTitle 
          title="История компании" 
          subtitle="Путь развития и роста"
        />
        
        <div className="space-y-12">
          {[
            {
              year: "2015",
              title: "Основание компании",
              description: "Открытие производства мебели с фокусом на B2B клиентов."
            },
            {
              year: "2017",
              title: "Расширение производства",
              description: "Переезд в новый цех, закупка ЧПУ оборудования KDT."
            },
            {
              year: "2019",
              title: "Запуск распила EGGER",
              description: "Начало работы с плитой EGGER, создание склада на 95 декоров."
            },
            {
              year: "2021",
              title: "Расширение услуг",
              description: "Запуск проектирования в БАЗИС-Мебельщик, комплектация фурнитурой."
            },
            {
              year: "2025",
              title: "Сегодня",
              description: "59 500+ проектов, цех 4000 м², команда из 50+ специалистов."
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="md:col-span-2 text-accent font-medium text-xl">
                {item.year}
              </div>
              <div className="md:col-span-10">
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < 4 && <Separator className="mt-6" />}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent/10 rounded-xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">Хотите стать партнёром?</h2>
            <p className="text-muted-foreground">
              Оставьте заявку, и мы вышлем актуальный прайс и условия сотрудничества.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-accent hover:bg-accent/90 text-white"
                onClick={() => window.location.href = "/contacts"}
              >
                Получить прайс
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = "/services"}
              >
                Наши услуги
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            className="aspect-video rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img 
              src={aboutProductionImg} 
              alt="Наше производство" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
