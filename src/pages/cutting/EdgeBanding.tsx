import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import B2BRequestForm from "@/components/B2BRequestForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Phone, Download, ArrowRight, Info } from "lucide-react";
import edgeBandingImg from "@/assets/edge-banding-machine.jpg";
import productionLineImg from "@/assets/production-line.jpg";

const edgingPrices = [
  {
    title: "Кромление прямое",
    subtitle: "Кромка: 0,4/0,8/1/1,3/2 мм",
    prices: [
      { label: "Детали 10–19 мм", price: "35 ₽/м" },
      { label: "Детали 22–28 мм", price: "50 ₽/м" },
      { label: "Детали 32–38 мм", price: "70 ₽/м" },
    ]
  },
  {
    title: "Кромление радиуса",
    subtitle: "Кромка: 0,4/0,8/1/1,3/2 мм",
    prices: [
      { label: "Детали 16–19 мм", price: "90 ₽/м" },
      { label: "Детали 22–28 мм", price: "110 ₽/м" },
      { label: "Детали более 30 мм", price: "120 ₽/м" },
    ]
  },
  {
    title: "Кромление столешниц",
    subtitle: "Кромление пластиком",
    prices: [
      { label: "Прямолинейное", price: "90 ₽/м" },
      { label: "Угол", price: "130 ₽/шт" },
      { label: "Радиус", price: "160 ₽/шт" },
    ]
  },
];

const technicalConditions = [
  "Доступные толщины кромок — 0,4/0,8/1/1,3/2 мм",
  "Минимальный размер детали с кромкой по периметру — 250×60 мм",
  "Минимальный размер детали без кромки — 100×20 мм",
  "Детали с размером по одной из сторон менее 60 мм изготавливаются с кромкой по трём сторонам",
  "Минимальная толщина детали с кромкой 0,4–1,0 мм — 10 мм",
  "Минимальная толщина детали с кромкой 2,0 мм — 16 мм",
  "Минимальный внешний радиус с кромлением — 70 мм",
  "Минимальный внутренний радиус с кромлением 100/150/250 мм для толщин 16/25/38–43 мм соответственно",
];

const equipment = [
  {
    name: "Кромкооблицовочный станок KDT",
    desc: "Станок для нанесения кромки, работает с рулонным и реечным материалом. Прифуговка деталей, раундеры, разделяющая и моющая жидкости. Максимальная толщина заготовки до 60 мм.",
  },
  {
    name: "Кромкооблицовочный станок KDT Pro",
    desc: "Станок промышленного класса для нанесения кромки ПВХ. Прифуговка деталей, раундеры. Максимальная толщина заготовки до 46 мм.",
  },
];

const relatedServices = [
  { name: "Распил ЛДСП EGGER", price: "от 554 ₽/м²", link: "/cutting/ldsp-egger" },
  { name: "Сверление отверстий", price: "от 100 ₽/м²", link: "/cutting/drilling" },
  { name: "Раскрой мебельных деталей", price: "от 950 ₽/м²", link: "/cutting/furniture-cutting" },
  { name: "Распил МДФ", price: "от 320 ₽/лист", link: "/cutting/mdf" },
  { name: "Фрезеровка ДСП", price: "от 90 ₽/шт", link: "/cutting/milling" },
];

const EdgeBanding = () => {
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
                Европейское оборудование
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Кромление <span className="text-accent">ЛДСП</span> в Москве
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Выполняем кромкооблицовку панелей ЛДСП, МДФ на станках KDT. 
                Профессиональное качество.
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
                src={edgeBandingImg}
                alt="Кромление ЛДСП"
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 container mx-auto px-4">
        <SectionTitle 
          title="Цены на кромление ЛДСП, столешниц" 
          subtitle="Стоимость операции кромления. Стоимость кромки рассчитывается отдельно."
        />
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {edgingPrices.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader className="bg-accent/10 rounded-t-lg">
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{category.subtitle}</p>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    {category.prices.map((item, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-bold text-accent">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-accent/10 rounded-lg flex items-start gap-3">
          <Info className="text-accent shrink-0 mt-0.5" size={20} />
          <p className="text-sm text-muted-foreground">
            Для декоров EGGER из категории складской программы кромка ПВХ 0,4 и 2 мм 
            всегда поддерживается на складе.
          </p>
        </div>
      </section>

      {/* Technical Conditions */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Технические условия на кромление ЛДСП" 
            subtitle="Параметры и ограничения при кромлении деталей"
          />
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <Card className="p-6">
              <ul className="space-y-3">
                {technicalConditions.slice(0, 4).map((condition, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <Check className="text-accent shrink-0 mt-0.5" size={16} />
                    <span className="text-muted-foreground">{condition}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-6">
              <ul className="space-y-3">
                {technicalConditions.slice(4).map((condition, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <Check className="text-accent shrink-0 mt-0.5" size={16} />
                    <span className="text-muted-foreground">{condition}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <p className="text-muted-foreground text-center mt-8 max-w-3xl mx-auto">
            Оборудование фабрики Простомебель позволяет выполнять кромкооблицовку панелей ЛДСП, 
            МДФ с матовым и глянцевым декором, декоративных панелей TSS кромкой всех 
            популярных толщин и параметров.
          </p>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16 container mx-auto px-4">
        <SectionTitle 
          title="Наше оборудование" 
          subtitle="Европейские станки для профессионального кромления"
        />
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {equipment.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6">
                <h3 className="text-xl font-bold mb-3">{item.name}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Работаем с кромкой от ведущих брендов</h3>
            <p className="text-muted-foreground mb-4">
              Кромка EGGER в толщинах 0,4 и 2 мм поддерживается на складе в достаточном 
              количестве для обеспечения заявленных сроков производства.
            </p>
            <p className="text-muted-foreground">
              Работаем с кромкой EGGER, Rehau, Dollken. Для достижения максимального 
              качества при кромлении все детали кромятся с прифуговкой.
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
              className="w-full h-[300px] object-cover rounded-xl"
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
            <B2BRequestForm serviceType="Кромление ЛДСП" />
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
            href="tel:+79968099181" 
            className="inline-flex items-center gap-3 text-2xl font-bold hover:opacity-80 transition-opacity"
          >
            <Phone size={28} />
            +79968099181
          </a>
        </div>
      </section>
    </div>
  );
};

export default EdgeBanding;
