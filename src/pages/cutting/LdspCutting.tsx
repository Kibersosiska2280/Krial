import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import B2BRequestForm from "@/components/B2BRequestForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Truck, Clock, ArrowRight, Phone, Download, FileText, Package, Ruler, CircleDot, Factory, Shield } from "lucide-react";
import cncSawingImg from "@/assets/cnc-sawing.jpg";
import edgeBandingImg from "@/assets/edge-banding-machine.jpg";
import drillingImg from "@/assets/drilling-machine.jpg";
import ldspWarehouseImg from "@/assets/ldsp-warehouse.jpg";
import productionLineImg from "@/assets/production-line.jpg";

const cuttingServices = [
  { name: "Распил ЛДСП EGGER", price: "от 554 ₽/м²", link: "/cutting/ldsp-egger" },
  { name: "Кромление ЛДСП", price: "от 35 ₽/м", link: "/cutting/edge-banding" },
  { name: "Сверление отверстий", price: "от 100 ₽/м²", link: "/cutting/drilling" },
  { name: "Раскрой мебельных деталей", price: "от 950 ₽/м²", link: "/cutting/furniture-cutting" },
  { name: "Распил МДФ", price: "от 320 ₽/лист", link: "/cutting/mdf" },
  { name: "Фрезеровка ДСП", price: "от 90 ₽/шт", link: "/cutting/milling" },
];

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
    premium: 3110,
    includes: ["ЛДСП + раскрой", "Изготовление радиусов, пазы", "Сверление отверстий", "Упаковка в картон", "Проект в БАЗИС-Мебельщик"]
  },
];

const stats = [
  { value: "59 500+", label: "проектов выполнено", icon: Package },
  { value: "11 дней", label: "срок производства", icon: Clock },
  { value: "95", label: "декоров EGGER на складе", icon: Ruler },
  { value: "4000 м²", label: "площадь цеха", icon: Factory },
];

const orderSteps = [
  { step: "01", title: "Отправьте чертёж", desc: "Заполните бланк заказа или отправьте файл в БАЗИС-Мебельщик" },
  { step: "02", title: "Укажите адрес", desc: "Укажите адрес для доставки. Зона: Москва и до 100 км за МКАД" },
  { step: "03", title: "Внесите оплату", desc: "Оплатите счёт полностью или внесите предоплату 50%" },
  { step: "04", title: "Ожидайте доставки", desc: "Мы сообщим о доставке заранее, за 2-3 дня до готовности" },
];

const LdspCutting = () => {
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
                Для бизнеса B2B
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Распил <span className="text-accent">ЛДСП</span> по размерам заказчика
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Распил, кромление и сверление по доступной цене. 
                Комплектация необходимой фурнитурой. Москва.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-accent">
                  <Check size={20} />
                  <span>95 декоров EGGER</span>
                </div>
                <div className="flex items-center gap-2 text-accent">
                  <Check size={20} />
                  <span>ЧПУ оборудование KDT</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
                  <a href="#request-form">
                    <Phone size={18} className="mr-2" />
                    Получить прайс
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#egger-info">
                    <Download size={18} className="mr-2" />
                    Программа поставки EGGER
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
                alt="Распил ЛДСП на ЧПУ станке"
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 container mx-auto px-4">
        <SectionTitle 
          title="Услуги по распилу" 
          subtitle="Полный комплекс работ по обработке ЛДСП"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {cuttingServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={service.link}>
                <Card className="h-full hover:border-accent transition-colors group cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-accent transition-colors">
                      {service.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-accent">{service.price}</p>
                    <ArrowRight className="mt-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-2 transition-all" />
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EGGER Info */}
      <section id="egger-info" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Работаем с плитой и кромкой <span className="text-accent">EGGER</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Поддерживаем на складе 95 декоров EGGER в толщинах ДСП 8, 10, 16, 25 мм 
                и кромку 0,4 и 2 мм. Работаем с оригинальной кромкой EGGER.
              </p>
              <Button variant="outline">
                <Download size={18} className="mr-2" />
                Скачать программу поставки (PDF, 55 кб)
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src={ldspWarehouseImg}
                alt="Склад ЛДСП EGGER"
                className="w-full h-[350px] object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 container mx-auto px-4">
        <SectionTitle 
          title="Цены на раскрой и распил ЛДСП" 
          subtitle="Распил EGGER с кромкой и присадкой «под ключ»"
        />
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
          Платите только за квадратные метры материала в заказе, не нужно выкупать листы. 
          В стоимость входит раскрой и услуги по обработке.
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

        <p className="text-center text-sm text-muted-foreground mt-8">
          * Крепёжная фурнитура: евровинты, шурупы, гвозди, эксцентриковые стяжки рассчитываются отдельно.
        </p>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Наше производство" 
            subtitle="С 2015 года мы выросли из небольшого производства до фабрики с промышленным ЧПУ оборудованием"
          />
          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center text-accent mb-4">
                  <stat.icon size={28} />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Gallery */}
      <section className="py-16 container mx-auto px-4">
        <SectionTitle 
          title="Распил и раскрой ЛДСП" 
          subtitle="Специализация фабрики — индивидуальный распил по размерам заказчика"
        />
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-6">
              Клиенты фабрики — магазины кухонь и корпусной мебели, частные мастера, 
              дизайнеры и архитекторы, компании по оснащению гостиниц и офисов, 
              исполнители тендеров.
            </p>
            <p className="text-muted-foreground mb-6">
              KriAl_mebel берёт на себя решение задач под ключ и освобождает от 
              необходимости работы с несколькими компаниями. Мы объединим комплектующие 
              от поставщиков фасадов, столешниц и декоративных элементов, укомплектуем 
              заказ фурнитурой и отгрузим готовый комплект для сборки мебели.
            </p>
            <p className="text-muted-foreground">
              Производство организовано на промышленном оборудовании KDT. 
              Конструкторский отдел из 10 человек разрабатывает заказы в минимальные сроки.
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
      </section>

      {/* Order Steps */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Как заказать распил EGGER" 
            subtitle="Простой процесс оформления заказа"
          />
          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {orderSteps.map((item, index) => (
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

      {/* B2B Info */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                <Shield size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Принимаем заказы от юр. лиц и ИП</h3>
                <p className="text-muted-foreground text-sm">
                  Мы принимаем заказы от юридических лиц (ЮЛ) и ИП, чья деятельность связана 
                  с продажей, комплектацией, производством мебели. Цены на сайте действительны для ЮЛ и ИП.
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Принимаем эскизы и БАЗИС-Мебельщик</h3>
                <p className="text-muted-foreground text-sm">
                  Мы принимаем заказы в виде эскизов и файлов Базис. Выполните настройки 
                  БАЗИС-Мебельщик по нашим рекомендациям.
                </p>
                <p className="text-accent text-sm mt-2">domlight@mail.ru</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Delivery */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Доставка и подъём" 
            subtitle="Доставляем по Москве и за МКАД до 100 км"
          />
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Check className="text-accent" size={20} />
                Бесплатная доставка
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Предоставляется юр. лицам и ИП в пределах МКАД</li>
                <li>• Доставка только до склада, офиса, магазина</li>
                <li>• За МКАД до 30 км: 40 ₽/км</li>
                <li>• За МКАД от 31 до 100 км: по тарифу платной доставки</li>
                <li>• Выгрузка осуществляется силами заказчика</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Truck className="text-accent" size={20} />
                Платная доставка
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• В пределах МКАД до ТТК: 2000 ₽</li>
                <li>• Доставка в ТТК: 3000 ₽</li>
                <li>• За МКАД до 30 км: 2000 ₽ + 40 ₽/км</li>
                <li>• За МКАД до 100 км: 2000 ₽ + 60 ₽/км</li>
                <li>• Ручной подъём: 50 ₽ за упаковку за этаж</li>
              </ul>
            </Card>
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
            <B2BRequestForm serviceType="Распил ЛДСП" />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужен расчёт заказа?</h2>
          <p className="text-xl mb-8 opacity-90">
            Отправьте схемы мебели с размерами или список деталей и получите расчёт через 30 минут
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

export default LdspCutting;
