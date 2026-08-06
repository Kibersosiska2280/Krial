import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import B2BRequestForm from "@/components/B2BRequestForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Truck, Clock, ArrowRight, Phone, Download, Settings, Zap, Package, Factory } from "lucide-react";
import cncSawingImg from "@/assets/cnc-sawing.jpg";
import drillingImg from "@/assets/drilling-machine.jpg";
import millingImg from "@/assets/milling-machine.jpg";
import productionLineImg from "@/assets/production-line.jpg";

const reasons = [
  { 
    number: "1", 
    title: "Комплексный подход", 
    desc: "Делаем распиловку, кромление, любую присадку на ЧПУ оборудовании, комплектуем фурнитурой и доставляем" 
  },
  { 
    number: "2", 
    title: "Решаем горящие задачи", 
    desc: "Если сроки поджимают, можем выполнить заказ оперативно. От вас нужно задание на нашем бланке" 
  },
  { 
    number: "3", 
    title: "Доставляем с подъёмом", 
    desc: "Доставим всю продукцию до адреса вашего заказчика, при необходимости поднимем и занесём" 
  },
  { 
    number: "4", 
    title: "Комплектуем фурнитурой", 
    desc: "Мы комплектуем заказы всей необходимой крепёжной фурнитурой. Вы получаете готовый комплект для сборки" 
  },
  { 
    number: "5", 
    title: "Нет минимального заказа", 
    desc: "У нас нет понятия минимальный заказ на распил для постоянных клиентов" 
  },
  { 
    number: "6", 
    title: "Станки ЧПУ KDT", 
    desc: "Мы владеем парком современного оборудования для резки ДСП и МДФ производства KDT" 
  },
];

const equipment = [
  {
    name: "Сверлильный станок KDT",
    desc: "Станок для высококачественного сверления вертикальных и горизонтальных отверстий, изготовления пазов. Идеально подходит для индивидуального производства мебели.",
    image: drillingImg
  },
  {
    name: "Обрабатывающий центр KDT",
    desc: "Станок используется для сверления сложных отверстий, присадки на габаритных деталях. Применяется для сверления в панелях МДФ и плитах TSS.",
    image: millingImg
  },
];

const relatedServices = [
  { name: "Распил ЛДСП EGGER", price: "от 554 ₽/м²", link: "/cutting/ldsp-egger" },
  { name: "Кромление ЛДСП", price: "от 35 ₽/м", link: "/cutting/edge-banding" },
  { name: "Сверление отверстий", price: "от 100 ₽/м²", link: "/cutting/drilling" },
  { name: "Раскрой мебельных деталей", price: "от 950 ₽/м²", link: "/cutting/furniture-cutting" },
  { name: "Распил МДФ", price: "от 320 ₽/лист", link: "/cutting/mdf" },
  { name: "Фрезеровка ДСП", price: "от 90 ₽/шт", link: "/cutting/milling" },
];

const LdspEggerCutting = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
                EGGER качество
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Распил ЛДСП <span className="text-accent">EGGER</span> в Москве
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Распил, кромление и сверление ЛДСП EGGER по размерам заказчика. 
                Доступные цены, профессиональное оборудование KDT.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                  <a href="#request-form">
                    <Phone size={18} className="mr-2" />
                    Получить прайс
                  </a>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden"
            >
              <img 
                src={cncSawingImg}
                alt="Распил ЛДСП EGGER"
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6 Reasons */}
      <section className="py-16 container mx-auto px-4">
        <SectionTitle 
          title="6 причин выбрать «KriAl_mebel»" 
          subtitle="Почему клиенты доверяют нам распил ЛДСП EGGER"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:border-accent transition-colors">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold shrink-0">
                      {reason.number}
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">{reason.title}</h3>
                      <p className="text-muted-foreground text-sm">{reason.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Распил и присадка на ЧПУ оборудовании" 
            subtitle="Сверление отверстий на мебельном производстве по индивидуальным проектам"
          />
          <div className="mt-10 space-y-12">
            {equipment.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[300px] object-cover rounded-xl"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{item.name}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Description */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Мы больше, чем просто цех по распилу</h2>
            <p className="text-muted-foreground mb-4">
              На фабрике Простомебель изготовление каждого изделия начинается с 
              конструирования в программе БАЗИС-Мебельщик и создания файлов 
              управления для ЧПУ станков.
            </p>
            <p className="text-muted-foreground mb-4">
              Присадка отверстий в ДСП закладывается на этом этапе, оборудование 
              затем только повторяет операции, заложенные программой. Исключается 
              человеческий фактор, ошибки в сверлении.
            </p>
            <p className="text-muted-foreground">
              Для фурнитуры и крепежа присадка ДСП делается в полном объёме. 
              Сверлятся глухие и сквозные отверстия, отверстия под петли, 
              наколы для направляющих и подъёмников.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src={productionLineImg}
              alt="Производственная линия"
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Сопутствующие услуги" 
            subtitle="Полный комплекс работ по обработке ЛДСП"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {relatedServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={service.link}>
                  <Card className="h-full hover:border-accent transition-colors group cursor-pointer">
                    <CardContent className="pt-6">
                      <h3 className="font-bold mb-2 group-hover:text-accent transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-xl font-bold text-accent">{service.price}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section id="request-form" className="py-16 container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <SectionTitle 
            title="Получить прайс" 
            subtitle="Оставьте заявку и наш менеджер вышлет вам актуальный прайс в течение 15 минут"
          />
          <div className="mt-10">
            <B2BRequestForm serviceType="Распил ЛДСП EGGER" />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Остались вопросы?</h2>
          <p className="text-xl mb-8 opacity-90">Позвоните нам — мы поможем с расчётом</p>
          <a 
            href="tel:+79374019738" 
            className="inline-flex items-center gap-3 text-2xl font-bold hover:opacity-80 transition-opacity"
          >
            <Phone size={28} />
            +7 (937) 401-97-38
          </a>
        </div>
      </section>
    </div>
  );
};

export default LdspEggerCutting;
