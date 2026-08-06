import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import B2BRequestForm from "@/components/B2BRequestForm";
import { Button } from "@/components/ui/button";
import { furnitureTypes, priceListItems, advantages, controlSteps } from "@/mock/furnitureTypes";
import { Check, ArrowRight, Download, Shield, Clock, Award, Users, Ruler, FileCheck } from "lucide-react";
import customProduction1Img from "@/assets/fabrika1.jpeg";
import customProduction2Img from "@/assets/fabrika2.jpeg";
import customProduction3Img from "@/assets/fabrika3.jpeg";
import galleryWork1Img from "@/assets/kitchen11.png";
import galleryWork2Img from "@/assets/kuxnya2.jpg";
import galleryWork3Img from "@/assets/Kuxnya1.png";
import galleryWork4Img from "@/assets/kuxnya.png";
import galleryWork5Img from "@/assets/kuxniy.jpg";
import galleryWork6Img from "@/assets/kuxnads.png";
import galleryWork7Img from "@/assets/kuxna.png";
import galleryWork8Img from "@/assets/kuxn.png";

const CustomFurniture = () => {
  return (
    <div className="pt-24">
      {/* Hero секция */}
      <section className="relative py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Мебель по <span className="text-accent">индивидуальным размерам</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Производим корпусную мебель любой сложности для бизнеса. 
              От одного изделия до крупных серийных заказов.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" asChild>
              <a href="#request-form">
                Запросить расчёт
                <ArrowRight size={18} className="ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 6 причин выбрать нас */}
      <section className="py-16 container mx-auto px-4">
        <SectionTitle 
          title="6 причин выбрать «ДомЛайт»" 
          subtitle="Почему с нами работают более 500 компаний"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {[
            { icon: Award, title: "13 лет на рынке", desc: "Опыт производства мебели с 2010 года" },
            { icon: Users, title: "Команда профессионалов", desc: "Более 50 специалистов в штате" },
            { icon: Ruler, title: "Любые размеры", desc: "Изготовим мебель под любые габариты" },
            { icon: Shield, title: "Гарантия 3 года", desc: "На все изделия и фурнитуру" },
            { icon: Clock, title: "Сроки от 5 дней", desc: "Быстрое производство без потери качества" },
            { icon: FileCheck, title: "Полный пакет документов", desc: "Договор, счёт, акт, УПД для бухгалтерии" },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary border border-border rounded-xl p-6 hover-lift"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-4">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* О нас */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Мы знаем, как делать мебель правильно</h2>
              <p className="text-muted-foreground mb-4">
                Компания «ДомЛайт» — это современное мебельное производство полного цикла. 
                Мы работаем с крупнейшими застройщиками, гостиничными сетями, торговыми сетями и частными заказчиками.
              </p>
              <p className="text-muted-foreground mb-6">
                Наше производство оснащено современным оборудованием KDT: 
                раскроечные центры, кромкооблицовочные станки, присадочные станки.
              </p>
              <div className="space-y-3">
                {advantages.slice(0, 4).map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check size={18} className="text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img 
                src={customProduction1Img}
                alt="Производство"
                className="rounded-xl h-48 object-cover"
              />
              <img 
                src={customProduction2Img}
                alt="Оборудование"
                className="rounded-xl h-48 object-cover"
              />
              <img 
                src={customProduction3Img}
                alt="Готовая мебель"
                className="rounded-xl h-48 object-cover col-span-2"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Мы производим */}
      <section className="py-16 container mx-auto px-4">
        <SectionTitle 
          title="Мы производим" 
          subtitle="Широкий ассортимент корпусной мебели"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {furnitureTypes.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-secondary border border-border rounded-xl overflow-hidden hover-lift">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1 group-hover:text-accent transition-colors">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href="#request-form">Запросить стоимость</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Нужен готовый проект */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Нужен готовый проект?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Если у вас нет готовых чертежей — не проблема! 
              Наши дизайнеры бесплатно разработают проект по вашим пожеланиям.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" asChild>
              <a href="#request-form">
                Заказать проект бесплатно
                <ArrowRight size={18} className="ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Прайс-лист */}
      <section className="py-16 container mx-auto px-4">
        <SectionTitle 
          title="Прайс-лист" 
          subtitle="Ориентировочные цены на производство"
        />

        <div className="max-w-3xl mx-auto mt-10">
          <div className="bg-secondary border border-border rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-background">
                <tr>
                  <th className="text-left p-4 font-medium">Наименование</th>
                  <th className="text-right p-4 font-medium">Стоимость</th>
                </tr>
              </thead>
              <tbody>
                {priceListItems.map((item, index) => (
                  <tr key={index} className="border-t border-border">
                    <td className="p-4">{item.name}</td>
                    <td className="p-4 text-right text-accent font-bold">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-6">
            <Button variant="outline" size="lg">
              <Download size={18} className="mr-2" />
              Скачать полный прайс-лист (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* Контроль качества */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Контроль качества на каждом этапе" 
            subtitle="Мы контролируем весь процесс производства"
          />

          <div className="grid md:grid-cols-5 gap-4 mt-10">
            {controlSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-background border border-border rounded-xl p-4 h-full">
                  <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold mb-3">
                    {index + 1}
                  </div>
                  <h3 className="font-bold mb-2 text-sm">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                {index < controlSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                    <ArrowRight size={16} className="text-accent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Что предоставляем по каждому заказу */}
      <section className="py-16 container mx-auto px-4">
        <SectionTitle 
          title="Что мы предоставляем" 
          subtitle="По каждому заказу вы получаете"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {[
            "Договор с чёткими сроками",
            "Спецификацию изделий",
            "3D-визуализацию проекта",
            "Чертежи для согласования",
            "Счёт на оплату",
            "Акт выполненных работ",
            "УПД для бухгалтерии",
            "Гарантийный талон",
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 p-4 bg-secondary border border-border rounded-lg"
            >
              <Check size={18} className="text-accent shrink-0" />
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Как заказать */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Как заказать мебель" 
            subtitle="4 простых шага до готового результата"
          />

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { step: "01", title: "Заявка", desc: "Оставьте заявку на сайте или позвоните" },
              { step: "02", title: "Расчёт", desc: "Получите детальный расчёт в течение дня" },
              { step: "03", title: "Производство", desc: "Изготовим мебель в оговорённые сроки" },
              { step: "04", title: "Доставка", desc: "Доставим и при необходимости соберём" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Галерея работ */}
      <section className="py-16 container mx-auto px-4">
        <SectionTitle 
          title="Наши работы" 
          subtitle="Примеры выполненных проектов"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {[
            galleryWork1Img,
            galleryWork2Img,
            galleryWork3Img,
            galleryWork4Img,
            galleryWork5Img,
            galleryWork6Img,
            galleryWork7Img,
            galleryWork8Img,
          ].map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="aspect-square overflow-hidden rounded-xl"
            >
              <img 
                src={img} 
                alt={`Работа ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Другие услуги */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Другие услуги для бизнеса" 
            subtitle="Комплексное решение для вашей компании"
          />

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { title: "ЛДСП EGGER", link: "/services/ldsp-egger", desc: "Поставка плитных материалов" },
              { title: "Контрактное производство", link: "/services/contract", desc: "Изготовление под вашим брендом" },
              { title: "Производство для тендеров", link: "/services/tenders", desc: "Работа по 44-ФЗ и 223-ФЗ" },
              { title: "Проектирование мебели", link: "/services/design", desc: "Разработка чертежей и 3D" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={item.link} className="block bg-background border border-border rounded-xl p-6 hover-lift group">
                  <h3 className="font-bold mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                  <span className="text-accent flex items-center gap-2 text-sm">
                    Подробнее <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Форма заявки */}
      <section id="request-form" className="py-16 container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <SectionTitle 
            title="Запросить стоимость" 
            subtitle="Получите расчёт в течение рабочего дня"
          />
          <div className="mt-10">
            <B2BRequestForm serviceType="Мебель по индивидуальным размерам" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomFurniture;
