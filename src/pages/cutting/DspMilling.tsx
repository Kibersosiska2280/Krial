import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import B2BRequestForm from "@/components/B2BRequestForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Phone, FileText } from "lucide-react";
import millingImg from "@/assets/milling-machine.jpg";
import frezerovka from "@/assets/frezerovka.jpg";
import productionLineImg from "@/assets/production-line.jpg";

const millingPrices = [
  {
    title: "Фрезеровка ЛДСП 10-16 мм",
    subtitle: "Общей площадью",
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
    subtitle: "Общей площадью",
    prices: [
      { label: "До 0,2 м²", price: "120 ₽/шт" },
      { label: "До 0,5 м²", price: "162 ₽/шт" },
      { label: "До 1 м²", price: "180 ₽/шт" },
      { label: "До 2 м²", price: "240 ₽/шт" },
      { label: "До 5,5 м²", price: "360 ₽/шт" },
    ]
  },
];

const relatedServices = [
  { name: "Распил ЛДСП EGGER", price: "от 554 ₽/м²", link: "/cutting/ldsp-egger" },
  { name: "Кромление ЛДСП", price: "от 35 ₽/м", link: "/cutting/edge-banding" },
  { name: "Сверление отверстий", price: "от 100 ₽/м²", link: "/cutting/drilling" },
  { name: "Раскрой мебельных деталей", price: "от 950 ₽/м²", link: "/cutting/furniture-cutting" },
  { name: "Распил МДФ", price: "от 320 ₽/лист", link: "/cutting/mdf" },
];

const DspMilling = () => {
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
                Оборудование ЧПУ
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-accent">Фрезеровка</span> ДСП в Москве
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Фрезеровка материала ЛДСП, МДФ, фанеры на ЧПУ оборудовании KDT. 
                Криволинейные детали любой сложности.
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
                src={frezerovka}
                alt="Фрезеровка ДСП"
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 container mx-auto px-4">
        <SectionTitle 
          title="Цены на фрезеровку на ЧПУ" 
          subtitle="Стоимость операции фрезерования ЛДСП"
        />
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          Указана стоимость услуг по обработке ЛДСП. Материал рассчитывается отдельно.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-10">
          {millingPrices.map((category, index) => (
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
              <h2 className="text-3xl font-bold mb-6">Фрезеровка материала на ЧПУ оборудовании</h2>
              <p className="text-muted-foreground mb-4">
                Изготовление мебельных деталей на фабрике Простомебель происходит на ЧПУ 
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
                src={productionLineImg}
                alt="Производственная линия"
                className="w-full h-[350px] object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16 container mx-auto px-4">
        <SectionTitle 
          title="Обрабатывающий центр KDT" 
          subtitle="Профессиональное ЧПУ оборудование для фрезеровки"
        />
        <div className="grid md:grid-cols-2 gap-12 items-center mt-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src={millingImg}
              alt="Обрабатывающий центр KDT"
              className="w-full h-[350px] object-cover rounded-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-4">
              Обработка криволинейных деталей и сверление отверстий в декоративных панелях 
              производится на обрабатывающем центре KDT.
            </p>
            <p className="text-muted-foreground mb-4">
              Материал укладывается в станок на пневматические резиновые подушки, которые 
              исключают образование царапин на декоративной поверхности.
            </p>
            <p className="text-muted-foreground">
              Цена криволинейной обработки рассчитывается отдельно. На цену влияет сложность 
              и толщина деталей.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Order Info */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Принимаем заказы в виде схем или в БАЗИС-Мебельщик</h3>
                  <p className="text-muted-foreground text-sm">
                    Заданием может служить эскиз или чертёж изделия, по которому конструктор 
                    фабрики разработает в программе БАЗИС-Мебельщик.
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
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 container mx-auto px-4">
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
              <B2BRequestForm serviceType="Фрезеровка ДСП" />
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

export default DspMilling;
