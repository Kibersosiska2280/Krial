import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import B2BRequestForm from "@/components/B2BRequestForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Phone, Download, ArrowRight, FileText } from "lucide-react";
import cncSawingImg from "@/assets/cnc-sawing.jpg";
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

const additionalPrices = [
  {
    title: "Резка ЛДСП",
    prices: [
      { label: "Лист 8-12 мм", price: "320 ₽" },
      { label: "Лист 16-19 мм", price: "400 ₽" },
      { label: "Лист 22-28 мм", price: "500 ₽" },
      { label: "ХДФ 3 мм", price: "220 ₽/лист" },
      { label: "МДФ 16-19 мм", price: "400 ₽/лист" },
    ]
  },
  {
    title: "Кромление кромкой",
    subtitle: "Кромка: 0,4/0,8/1/1,3/2 мм",
    prices: [
      { label: "Детали 10–19 мм", price: "35 ₽/м" },
      { label: "Детали 22–28 мм", price: "50 ₽/м" },
      { label: "Детали 32–38 мм", price: "70 ₽/м" },
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

const furnitureTypes = [
  { title: "Мебель из ЛДСП на заказ", desc: "Изготавливаем мебель по индивидуальным проектам" },
  { title: "Раскрой ДСП для кухни", desc: "Кухонные корпуса или кухни под ключ" },
  { title: "Раскрой ЛДСП для шкафа-купе", desc: "Корпуса для шкафов по индивидуальным проектам" },
  { title: "Распил мебельного щита", desc: "Мебельные детали по размерам заказчика" },
];

const relatedServices = [
  { name: "Распил ЛДСП EGGER", price: "от 554 ₽/м²", link: "/cutting/ldsp-egger" },
  { name: "Кромление ЛДСП", price: "от 35 ₽/м", link: "/cutting/edge-banding" },
  { name: "Сверление отверстий", price: "от 100 ₽/м²", link: "/cutting/drilling" },
  { name: "Распил МДФ", price: "от 320 ₽/лист", link: "/cutting/mdf" },
  { name: "Фрезеровка ДСП", price: "от 90 ₽/шт", link: "/cutting/milling" },
];

const FurnitureCutting = () => {
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
                Комплектация фурнитурой
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Раскрой <span className="text-accent">мебельных деталей</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Изготовление мебельных деталей под ключ, комплектация фурнитурой. 
                ЧПУ оборудование KDT.
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
                src={cncSawingImg}
                alt="Раскрой мебельных деталей"
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Package Pricing */}
      <section className="py-16 container mx-auto px-4">
        <SectionTitle 
          title="Цены на раскрой мебельных деталей" 
          subtitle="Распил и присадка мебельных деталей «под ключ»"
        />
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
          Платите только за квадратные метры материала в заказе, не нужно выкупать листы. 
          В стоимость квадратного метра уже входят все услуги по обработке.
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

      {/* Additional Pricing */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Распил EGGER, кромлением и дополнительные услуги" 
            subtitle="Необходим только распил ЛДСП без фурнитуры? Все услуги рассчитываются отдельно."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {additionalPrices.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    {category.subtitle && (
                      <p className="text-sm text-muted-foreground">{category.subtitle}</p>
                    )}
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

      {/* Furniture Types */}
      <section className="py-16 container mx-auto px-4">
        <SectionTitle 
          title="Изготавливаем все виды мебельных деталей" 
          subtitle="Индивидуальный раскрой под любые проекты"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {furnitureTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:border-accent transition-colors">
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2">{type.title}</h3>
                  <p className="text-muted-foreground text-sm">{type.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Production Info */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Раскрой мебельных деталей на ЧПУ</h2>
              <p className="text-muted-foreground mb-4">
                Изготовление мебельных деталей на фабрике ДомЛайт происходит на ЧПУ 
                станках. Детали ДСП с обработкой ручным или не автоматизированным инструментом 
                занимают 3-5% от объёма обработки материала.
              </p>
              <p className="text-muted-foreground mb-4">
                Контроль производства основан на ERP-системе автоматизации процессов. Данная 
                программа отслеживает заказы на этапах обработки, формирует спецификации, 
                информирует о готовности клиентов.
              </p>
              <p className="text-muted-foreground">
                На обрабатывающем центре KDT выполняется фигурный раскрой ЛДСП, 
                фрезерование. Криволинейные детали любой сложности изготавливаются в чётком 
                соответствии с техническим заданием.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src={millingImg}
                alt="ЧПУ обработка"
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Order Info */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Принимаем заказы в виде схем или в БАЗИС-Мебельщик</h3>
                <p className="text-muted-foreground text-sm">
                  Заданием может служить эскиз или чертёж изделия, по которому конструктор 
                  фабрики разработает в программе БАЗИС-Мебельщик. Или файл БАЗИС заказчика, 
                  конструктор фабрики адаптирует под технические условия фабрики.
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                <Check size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Качество без рекламаций</h3>
                <p className="text-muted-foreground text-sm">
                  Сборка мебели, произведённой на промышленном оборудовании, происходит без 
                  рекламаций и переделок деталей в абсолютном большинстве случаев.
                </p>
              </div>
            </div>
          </Card>
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
            <B2BRequestForm serviceType="Раскрой мебельных деталей" />
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

export default FurnitureCutting;
