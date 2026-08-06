import { motion } from "framer-motion";
import { 
  FileText, 
  Clock, 
  Shield, 
  Truck, 
  CheckCircle2,
  Building,
  Briefcase,
  Layers,
  Cog,
  Calculator,
  FileSearch,
  Package,
  Ruler,
  Settings,
  ArrowRight,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from "@/components/SectionTitle";
import B2BRequestForm from "@/components/B2BRequestForm";
import { useNavigate } from "react-router-dom";

import tenderProductionImg from "@/assets/tender-production.jpg";
import factoryProductionImg from "@/assets/factory-production.jpg";

const TenderProduction = () => {
  const navigate = useNavigate();

  const targetProducts = [
    { icon: <Building className="w-8 h-8" />, title: "Корпусная мебель для общественных пространств" },
    { icon: <Briefcase className="w-8 h-8" />, title: "Офисная мебель по индивидуальному проекту" },
    { icon: <Layers className="w-8 h-8" />, title: "Сложная мебель: ЛДСП, стекло, металл, камень" },
    { icon: <Cog className="w-8 h-8" />, title: "Типовая мебель, много в короткий срок" },
  ];

  const advantages = [
    {
      icon: <Truck className="w-6 h-6 text-accent" />,
      title: "Доставляем с подъемом, монтируем",
      description: "Доставим продукцию до адреса заказчика, при необходимости поднимем и занесем, в регионы только доставляем"
    },
    {
      icon: <Shield className="w-6 h-6 text-accent" />,
      title: "Гарантийное обслуживание",
      description: "Условия гарантийного обслуживания и сроки включаем в договор, на фурнитуру гарантия в рамках производителя"
    },
    {
      icon: <FileText className="w-6 h-6 text-accent" />,
      title: "Работаем с НДС",
      description: "Параметрические библиотеки в БАЗИС сокращают время проектирования в несколько раз, уменьшают ошибки"
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "Решаем горящие задачи",
      description: "Если сроки поджимают, можем выполнить заказ оперативно. Нужно четкое ТЗ и оперативное согласование"
    },
    {
      icon: <Calculator className="w-6 h-6 text-accent" />,
      title: "Оперативно считаем стоимость",
      description: "Расчет стоимости готовим в течение дня, если проект большой, отдаем расчет частями"
    },
    {
      icon: <FileSearch className="w-6 h-6 text-accent" />,
      title: "Расшифровываем ТЗ",
      description: "Если описание в техническом задании непонятно или полно избыточных данных, поможем разобраться"
    },
  ];

  const stats = [
    { value: "11", label: "лет на рынке", suffix: "" },
    { value: "59 500", label: "выполненных проектов", suffix: "+" },
    { value: "11", label: "дней срок производства", suffix: "" },
    { value: "95", label: "декоров EGGER на складе", suffix: "" },
  ];

  const workStages = [
    { step: "01", title: "Отправьте ТЗ", description: "Пришлите техническое задание, аукционную документацию или параметры проекта" },
    { step: "02", title: "Получите расчет", description: "Мы проведем оценку стоимости проекта, сроков реализации" },
    { step: "03", title: "Согласование параметров", description: "Менеджер проекта согласует параметры заказа. Возможен выезд специалиста" },
    { step: "04", title: "Разработка чертежей", description: "Конструктор выполнит проектирование, вышлет схемы на согласование" },
    { step: "05", title: "Подтвердите проект", description: "Проверьте схемы от конструктора. После подтверждения придет счет" },
    { step: "06", title: "Оплата и доставка", description: "Оплатите счет 100%. Ожидайте доставку, мы подтвердим её заранее" },
  ];

  const productionSteps = [
    { title: "Раскрой", icon: <Ruler className="w-8 h-8" /> },
    { title: "Кромление", icon: <Package className="w-8 h-8" /> },
    { title: "Сверление", icon: <Settings className="w-8 h-8" /> },
    { title: "Упаковка", icon: <Package className="w-8 h-8" /> },
  ];

  const locations = [
    "Администрации", "Школы", "Больницы", "Бизнес-центры",
    "Банки", "Гостиницы", "Рестораны", "Магазины"
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background z-10" />
          <img 
            src={tenderProductionImg}
            alt="Производство для тендеров" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10 pt-12 md:pt-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
                Для участников тендеров
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
                Производство{" "}
                <span className="text-accent">для тендеров</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-2xl">
                Производим мебель по индивидуальным проектам и стандартные изделия. 
                Проектируем, работаем в соответствии с техническим заданием.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90"
                  onClick={() => {
                    document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Рассчитать проект
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => navigate('/projects')}
                >
                  Наши работы
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Products */}
      <section className="py-16 bg-secondary/20">
        <div className="container">
          <SectionTitle
            subtitle="Будем полезны, если вам нужна"
            title="Участвуете в торгах, но нет собственного производства?"
            description="Разработаем чертежи мебели по ТЗ, изготовим, укомплектуем, закажем комплектующие у сторонних производителей, отгрузим готовый комплект. Несем полную ответственность."
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-secondary/30 border-border hover:border-accent/50 transition-all text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 text-accent">
                      {product.icon}
                    </div>
                    <h3 className="font-medium text-white text-sm">{product.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16">
        <div className="container">
          <SectionTitle
            subtitle="Наши преимущества"
            title="Почему выбирают нас для тендеров"
            align="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-secondary/30 border-border hover:border-accent/50 transition-all h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      {adv.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{adv.title}</h3>
                    <p className="text-white/70 text-sm">{adv.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary/10">
        <div className="container">
          <SectionTitle
            subtitle="О производстве"
            title="Мы — производство индивидуальной мебели по оптовым ценам"
            description="С 2015 года мы выросли из небольшого производства до фабрики с промышленным ЧПУ оборудованием и цехом площадью 5000 м²"
            align="center"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src={factoryProductionImg}
                alt="Производство" 
                className="rounded-lg w-full"
              />
            </motion.div>
            
            <div>
              <SectionTitle
                subtitle="Наше производство"
                title="Сложные проекты, реализация под ключ"
                align="left"
              />
              
              <p className="text-white/70 mb-6">
                Производим и выступаем как ответственный генеральный подрядчик. 
                Способны заменить нескольких поставщиков в цепочке. 
                Например, административные стойки или рабочие места операторов, 
                включающие конструкции из ЛДСП, металлический каркас, столешницы из 
                акрилового камня, стеклянные перегородки из триплекса — наши обычные рядовые проекты.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {productionSteps.map((step, index) => (
                  <Card key={index} className="bg-secondary/30 border-border text-center">
                    <CardContent className="p-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-2 text-accent">
                        {step.icon}
                      </div>
                      <h3 className="font-medium text-white text-sm">{step.title}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Stages */}
      <section className="py-16 bg-secondary/20">
        <div className="container">
          <SectionTitle
            subtitle="Как работаем"
            title="Этапы работы"
            align="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-secondary/30 border-border h-full">
                  <CardContent className="p-6">
                    <span className="text-4xl font-bold text-accent/20">{stage.step}</span>
                    <h3 className="text-lg font-bold text-white mt-2 mb-2">{stage.title}</h3>
                    <p className="text-white/70 text-sm">{stage.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Furniture Locations */}
      <section className="py-16">
        <div className="container">
          <SectionTitle
            subtitle="Наша мебель здесь"
            title="Где установлена наша мебель"
            align="center"
          />
          
          <div className="flex flex-wrap justify-center gap-4">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="bg-secondary/30 border border-border px-6 py-3 rounded-lg flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-white">{location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Notice */}
      <section className="py-12 bg-accent/10 border-y border-accent/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Принимаем заказы от юр. лиц и ИП
            </h3>
            <p className="text-white/70 mb-6">
              Мы принимаем заказы от юридических лиц (ЮЛ) и ИП, чья деятельность связана с продажей, 
              комплектацией, производством мебели. Цены на сайте действительны для ЮЛ и ИП.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90"
              onClick={() => document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Стать партнёром
            </Button>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section id="request-form" className="py-16">
        <div className="container">
          <SectionTitle
            subtitle="Нужен расчет?"
            title="Рассчитать проект"
            description="Отправьте спецификацию или тендерную документацию. Мы подготовим расчет."
            align="center"
          />
          
          <B2BRequestForm />
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-secondary/20">
        <div className="container">
          <SectionTitle
            subtitle="Другие услуги"
            title="Услуги для бизнеса"
            align="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Индивидуальные проекты", desc: "Изготавливаем мебель по индивидуальным проектам", path: "/services/custom-furniture" },
              { title: "Контрактное производство", desc: "Выпустим мебель под маркой заказчика", path: "/services/contract" },
              { title: "Проектирование мебели", desc: "Полный цикл проектирования", path: "/services/design" },
              { title: "ЛДСП EGGER", desc: "Распил, кромление и сверление ЛДСП", path: "/services/ldsp-egger" },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="bg-secondary/30 border-border hover:border-accent/50 transition-all cursor-pointer h-full"
                  onClick={() => navigate(service.path)}
                >
                  <CardContent className="p-6">
                    <h3 className="font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/70 text-sm">{service.desc}</p>
                    <ArrowRight className="w-5 h-5 text-accent mt-4" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TenderProduction;
