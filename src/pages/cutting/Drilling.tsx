import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import B2BRequestForm from "@/components/B2BRequestForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Phone, Download } from "lucide-react";
import drillingImg from "@/assets/drilling-machine.jpg";
import millingImg from "@/assets/milling-machine.jpg";
import productionLineImg from "@/assets/production-line.jpg";

const pricingTiers = [
  { 
    thickness: "8/10 мм", 
    standard: 870, 
    design: 980, 
    premium: 1270,
    includes: ["ЛДСП + раскрой", "Изготовление радиусов, пазы", "Сверление отверстий", "Упаковка в картон", "Проект в БАЗИС-Мебельщик"]
  },
  { 
    thickness: "16 мм", 
    standard: 1120, 
    design: 1330, 
    premium: 1560,
    includes: ["ЛДСП + раскрой", "Изготовление радиусов, пазы", "Сверление отверстий", "Упаковка в картон", "Проект в БАЗИС-Мебельщик"]
  },
  { 
    thickness: "25 мм", 
    standard: 1500, 
    design: 1670, 
    premium: 1840,
    includes: ["ЛДСП + раскрой", "Изготовление радиусов, пазы", "Сверление отверстий", "Упаковка в картон", "Проект в БАЗИС-Мебельщик"]
  },
  { 
    thickness: "32 мм", 
    standard: 2240, 
    design: 2650, 
    premium: 3310,
    includes: ["ЛДСП + раскрой", "Изготовление радиусов, пазы", "Сверление отверстий", "Упаковка в картон", "Проект в БАЗИС-Мебельщик"]
  },
];

const drillingPrices = [
  {
    title: "Сверление отверстий",
    subtitle: "По БАЗИС-файлу клиента",
    prices: [
      { label: "Любое сверление", price: "150 ₽/м²" },
    ]
  },
  {
    title: "Сверление отверстий",
    subtitle: "С работой конструктора",
    prices: [
      { label: "Любое сверление", price: "300 ₽/м²" },
    ]
  },
];

const millingPrices = [
  {
    title: "Фрезеровка ЛДСП 10-16 мм",
    prices: [
      { label: "До 0,2 м²", price: "100 ₽/шт" },
      { label: "До 0,5 м²", price: "135 ₽/шт" },
      { label: "До 1 м²", price: "150 ₽/шт" },
      { label: "До 2 м²", price: "200 ₽/шт" },
      { label: "До 5,5 м²", price: "300 ₽/шт" },
    ]
  },
  {
    title: "Фрезеровка ЛДСП 22-36 мм",
    prices: [
      { label: "До 0,2 м²", price: "120 ₽/шт" },
      { label: "До 0,5 м²", price: "162 ₽/шт" },
      { label: "До 1 м²", price: "180 ₽/шт" },
      { label: "До 2 м²", price: "240 ₽/шт" },
      { label: "До 5,5 м²", price: "360 ₽/шт" },
    ]
  },
];

const equipment = [
  {
    name: "Сверлильный станок с ЧПУ KDT",
    desc: "Станок для высококачественного сверления вертикальных и горизонтальных отверстий, изготовления пазов, который идеально подходит для индивидуального производства мебели. Имеет высокую производительность, работает в две смены.",
    image: drillingImg
  },
  {
    name: "Обрабатывающий центр KDT",
    desc: "Станок используется для сверления сложных отверстий, присадки на габаритных деталях, например, угловых столешницах. Применяется для сверления в панелях МДФ и плитах TSS, для присадки под петли на фасадах.",
    image: millingImg
  },
];

const relatedServices = [
  { name: "Распил ЛДСП EGGER", price: "от 554 ₽/м²", link: "/cutting/ldsp-egger" },
  { name: "Кромление ЛДСП", price: "от 35 ₽/м", link: "/cutting/edge-banding" },
  { name: "Раскрой мебельных деталей", price: "от 950 ₽/м²", link: "/cutting/furniture-cutting" },
  { name: "Распил МДФ", price: "от 320 ₽/лист", link: "/cutting/mdf" },
  { name: "Фрезеровка ДСП", price: "от 90 ₽/шт", link: "/cutting/milling" },
];

const Drilling = () => {
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
                ЧПУ оборудование KDT
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Распил и <span className="text-accent">присадка</span> мебельных деталей
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Разработка присадки под фурнитуру, сверление отверстий на ЧПУ станках KDT. 
                Профессиональная обработка ЛДСП.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                <a href="#request-form">
                  <Phone size={18} className="mr-2" />
                  Получить прайс
                </a>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden"
            >
              <img 
                src={drillingImg}
                alt="Сверление отверстий ЧПУ"
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Package Pricing */}
      <section className="py-16 container mx-auto px-4">
        <SectionTitle 
          title="Цены на распил и присадку" 
          subtitle="Распил и присадка мебельных деталей «под ключ»"
        />
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
          Платите только за квадратные метры материала в заказе, не нужно выкупать листы, 
          платить за каждое отверстие. В стоимость квадратного метра уже входят все услуги по обработке.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.thickness}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="bg-accent/10 rounded-t-lg">
                  <CardTitle className="text-center text-accent">{tier.thickness} EGGER</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Standart:</span>
                      <span className="font-bold">{tier.standard.toLocaleString()} ₽/м²</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Design:</span>
                      <span className="font-bold">{tier.design.toLocaleString()} ₽/м²</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Premium:</span>
                      <span className="font-bold">{tier.premium.toLocaleString()} ₽/м²</span>
                    </div>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-medium mb-2">Входит:</p>
                    <ul className="space-y-1">
                      {tier.includes.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <Check size={14} className="text-accent mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Individual Pricing */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Стоимость операции сверления и фрезерования" 
            subtitle="Необходимо только ЛДСП без фурнитуры? Все услуги рассчитываются отдельно."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {drillingPrices.map((category, index) => (
              <motion.div
                key={category.subtitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{category.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    {category.prices.map((item, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-bold text-accent">{item.price}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            {millingPrices.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (index + 2) * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">Общей площадью</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.prices.map((item, i) => (
                        <div key={i} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{item.label}</span>
                          <span className="font-bold">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16 container mx-auto px-4">
        <SectionTitle 
          title="Наше оборудование" 
          subtitle="Профессиональные ЧПУ станки для сверления и присадки"
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
      </section>

      {/* Related Services */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Сопутствующие услуги" 
            subtitle="Полный комплекс работ по обработке ЛДСП"
          />
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
            {relatedServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link to={service.link}>
                  <Card className="h-full hover:border-accent transition-colors group cursor-pointer p-4">
                    <h4 className="font-medium text-sm mb-2 group-hover:text-accent transition-colors">
                      {service.name}
                    </h4>
                    <p className="text-accent font-bold text-sm">{service.price}</p>
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
            <B2BRequestForm serviceType="Сверление отверстий" />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужен расчёт заказа?</h2>
          <p className="text-xl mb-8 opacity-90">
            Отправьте схемы мебели с размерами и получите расчёт через 30 минут
          </p>
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

export default Drilling;
