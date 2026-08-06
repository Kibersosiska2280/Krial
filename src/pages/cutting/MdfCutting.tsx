import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import B2BRequestForm from "@/components/B2BRequestForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Phone, Info } from "lucide-react";
import mdf from "@/assets/mdf.jpg";
import millingImg from "@/assets/milling-machine.jpg";
import cncSawingImg from "@/assets/cnc-sawing.jpg";
import productionLineImg from "@/assets/production-line.jpg";

const mdfPrices = [
  {
    title: "Распил МДФ",
    prices: [
      { label: "МДФ 8-12 мм", price: "320 ₽/лист" },
      { label: "МДФ 16-19 мм", price: "400 ₽/лист" },
      { label: "МДФ 22-26 мм", price: "500 ₽/лист" },
      { label: "Декоративные плиты", price: "490 ₽/лист" },
    ]
  },
  {
    title: "Сверление отверстий",
    prices: [
      { label: "По БАЗИС-файлу клиента", price: "150 ₽/м²" },
      { label: "С работой конструктора", price: "300 ₽/м²" },
    ]
  },
];

const equipment = [
  {
    name: "Обрабатывающий центр KDT",
    desc: "Обработка криволинейных деталей и сверление отверстий в декоративных панелях производится на обрабатывающем центре KDT. Материал укладывается в станок на пневматические резиновые подушки, которые исключают образование царапин на декоративной поверхности.",
    image: millingImg
  },
  {
    name: "Пильный центр с ЧПУ KDT",
    desc: "Распил плиты МДФ организован на станках ЧПУ, на которых так же обрабатывается ЛДСП. Оборудование, выполняющее распил — раскроечный центр KDT.",
    image: cncSawingImg
  },
  {
    name: "Форматный станок KDT Pro",
    desc: "Для раскроя листового МДФ так же применяется форматно-раскроечный станок KDT Pro. Станок работает с картами раскроя из программы проектирования, ошибки при занесении размеров деталей исключены.",
    image: productionLineImg
  },
];

const relatedServices = [
  { name: "Распил ЛДСП EGGER", price: "от 554 ₽/м²", link: "/cutting/ldsp-egger" },
  { name: "Кромление ЛДСП", price: "от 35 ₽/м", link: "/cutting/edge-banding" },
  { name: "Сверление отверстий", price: "от 100 ₽/м²", link: "/cutting/drilling" },
  { name: "Раскрой мебельных деталей", price: "от 950 ₽/м²", link: "/cutting/furniture-cutting" },
  { name: "Фрезеровка ДСП", price: "от 90 ₽/шт", link: "/cutting/milling" },
];

const MdfCutting = () => {
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
                ЧПУ оборудование
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Распил <span className="text-accent">МДФ</span> по размерам в Москве
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Панели МДФ и фасады по размерам на ЧПУ оборудовании. 
                Доставка по Москве и области.
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
                src={mdf}
                alt="Распил МДФ"
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 container mx-auto px-4">
        <SectionTitle 
          title="Цены на распил МДФ по размерам" 
          subtitle="Стоимость операции распила и сверления МДФ"
        />
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          Указана стоимость работ по обработке МДФ. Материал рассчитывается отдельно.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-10">
          {mdfPrices.map((category, index) => (
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
      </section>

      {/* Info */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Распил МДФ по размерам на ЧПУ оборудовании</h2>
              <p className="text-muted-foreground mb-4">
                Заказать распил МДФ по вашим размерам можно, оформив бланк заказа или 
                направив файл в программе БАЗИС-Мебельщик. Если вам необходим распил МДФ 
                для фасадов в проекте мебели, то конструктор фабрики при проектировании 
                мебели разработает карту фасадов для обработки на ЧПУ оборудовании.
              </p>
              <p className="text-muted-foreground mb-4">
                Фабрика Простомебель не работает с материалом заказчика, распил МДФ 
                осуществляется только из ассортимента фабрики или заказных декоров.
              </p>
              <p className="text-muted-foreground">
                Для заказа доступны МДФ панели толщиной 6, 8, 10, 16, 19, 22 мм. Вы можете 
                купить МДФ необлицованный или декоративные панели производителей Alvic, 
                AGT, EGGER.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src={cncSawingImg}
                alt="ЧПУ раскрой"
                className="w-full h-[350px] object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16 container mx-auto px-4">
        <SectionTitle 
          title="Наше оборудование" 
          subtitle="Профессиональные станки для обработки МДФ"
        />
        <div className="mt-10 space-y-8">
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
                  className="w-full h-[280px] object-cover rounded-xl"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">{item.name}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Работаем с МДФ панелями от ведущих брендов</h2>
            <p className="text-muted-foreground mb-8">
              Комплектуем фурнитурой по оптовым ценам. Для всей фурнитуры в комплекте 
              делаем присадку на корпусе без дополнительной платы.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-lg px-6 py-2">Alvic</Badge>
              <Badge variant="outline" className="text-lg px-6 py-2">AGT</Badge>
              <Badge variant="outline" className="text-lg px-6 py-2">EGGER</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 container mx-auto px-4">
        <SectionTitle 
          title="Сопутствующие услуги" 
          subtitle="Полный комплекс работ по обработке материалов"
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
      </section>

      {/* Request Form */}
      <section id="request-form" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <SectionTitle 
              title="Получить прайс" 
              subtitle="Оставьте заявку и наш менеджер вышлет вам актуальный прайс в течение 15 минут"
            />
            <div className="mt-10">
              <B2BRequestForm serviceType="Распил МДФ" />
            </div>
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

export default MdfCutting;
