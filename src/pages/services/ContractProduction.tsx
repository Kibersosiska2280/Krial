import { motion } from "framer-motion";
import { 
  Factory, 
  FileCheck, 
  Truck, 
  Users, 
  Package, 
  ClipboardCheck,
  Building2,
  Palette,
  Ruler,
  Settings,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Warehouse,
  Star,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from "@/components/SectionTitle";
import B2BRequestForm from "@/components/B2BRequestForm";
import { useNavigate } from "react-router-dom";

import contractProductionImg from "@/assets/contract-production.jpg";
import factoryProductionImg from "@/assets/factory-production.jpg";

const ContractProduction = () => {
  const navigate = useNavigate();

  const targetClients = [
    { icon: <Building2 className="w-8 h-8" />, title: "Мебельный стартап" },
    { icon: <Palette className="w-8 h-8" />, title: "Сервис по дизайну интерьеров" },
    { icon: <Package className="w-8 h-8" />, title: "Магазин индивидуальной мебели" },
    { icon: <Settings className="w-8 h-8" />, title: "Компания по ремонту под ключ" },
  ];

  const advantages = [
    {
      icon: <ClipboardCheck className="w-6 h-6 text-accent" />,
      title: "Проектирование изделий",
      description: "Рассчитываем все размеры, подбираем фурнитуру, назначаем присадку, формируем сметы"
    },
    {
      icon: <Users className="w-6 h-6 text-accent" />,
      title: "Консультации по конструкции",
      description: "Конструкторы предложат оптимальную конструкцию изделия или дадут консультацию по проекту"
    },
    {
      icon: <Warehouse className="w-6 h-6 text-accent" />,
      title: "Закупка материалов под вас",
      description: "Если материал не входит в складскую программу, завезем его для бесперебойной отгрузки"
    },
    {
      icon: <Truck className="w-6 h-6 text-accent" />,
      title: "Доставка до клиента",
      description: "Доставим продукцию на склад или до адреса заказчика, поднимем и занесем"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-accent" />,
      title: "Контрольные сборки",
      description: "При необходимости делаем контрольные сборки. Актуально для сложных и типовых изделий"
    },
    {
      icon: <Package className="w-6 h-6 text-accent" />,
      title: "Полная комплектация",
      description: "Комплектуем фасадами, столешницами, фурнитурой, электрикой и освещением"
    },
  ];

  const stats = [
    { value: "11", label: "лет на рынке", suffix: "" },
    { value: "59 500", label: "выполненных проектов", suffix: "+" },
    { value: "11", label: "дней срок производства", suffix: "" },
    { value: "95", label: "декоров EGGER на складе", suffix: "" },
  ];

  const workFormats = [
    {
      title: "С проектированием нашим конструктором",
      description: "Конструктор рассчитывает все размеры, назначает фурнитуру, предлагает оптимальную конструкцию.",
      features: ["Проектирование конструктором", "Подбор фурнитуры", "Согласование чертежей", "Сметы", "Аккаунт-менеджер"],
      ideal: "Компаниям без конструктора, для исключения риска ошибок проектирования"
    },
    {
      title: "По вашим проектам в БАЗИС-Мебельщик",
      description: "Конструктор не вторгается в модель. Производится автоматическая проверка на ошибки в БАЗИС.",
      features: ["База материалов БАЗИС", "Консультации по фурнитуре", "Небольшие доработки", "Сметы", "Аккаунт-менеджер"],
      ideal: "Компаниям со своим конструктором, для экономии времени на согласовании"
    },
    {
      title: "С использованием БАЗИС-Салон",
      description: "Работа ведется по библиотеке типовых эластичных модулей. Возможны любые размеры.",
      features: ["Проектирование конструктором", "Подбор фурнитуры", "Согласование чертежей", "Контрольная сборка"],
      ideal: "Для масштабирования бизнеса, уменьшения срока производства"
    },
  ];

  const workStages = [
    { step: "01", title: "Отправьте чертеж", description: "Заполните бланк, приложите схемы изделия или файл в БАЗИС-Мебельщик" },
    { step: "02", title: "Укажите адрес", description: "Укажите адрес для доставки. Доставляем по Москве и до 100 км за МКАД" },
    { step: "03", title: "Разработка чертежа", description: "Наш конструктор спроектирует заказ и вышлет схемы на согласование" },
    { step: "04", title: "Подтвердите проект", description: "Проверьте схемы от конструктора. После подтверждения придет счет" },
    { step: "05", title: "Внесите оплату", description: "Оплатите счет полностью или внесите предоплату 50%" },
    { step: "06", title: "Ожидайте доставки", description: "Мы сообщим о доставке заранее, за 2-3 дня до готовности" },
  ];

  const deliveryPrices = [
    { zone: "Бесплатная доставка", description: "До склада, офиса, магазина (только для ЮЛ и ИП)", price: "0 ₽" },
    { zone: "В пределах МКАД до ТТК", description: "Выгрузка, подъем, занос", price: "2 000 ₽" },
    { zone: "Доставка в ТТК", description: "Полная доставка с подъемом", price: "3 000 ₽" },
    { zone: "За МКАД до 30 км", description: "Бесплатно (только выгрузка) или 2000₽ + 40₽/км", price: "от 1 000 ₽" },
    { zone: "За МКАД до 70 км", description: "С подъемом и заносом", price: "от 3 000 ₽" },
  ];

  const productionSteps = [
    { title: "Раскрой", icon: <Ruler className="w-8 h-8" /> },
    { title: "Кромление", icon: <Package className="w-8 h-8" /> },
    { title: "Сверление", icon: <Settings className="w-8 h-8" /> },
    { title: "Упаковка", icon: <Package className="w-8 h-8" /> },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background z-10" />
          <img 
            src={contractProductionImg}
            alt="Контрактное производство" 
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
                Производство для бизнеса
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
                Контрактное производство{" "}
                <span className="text-accent">под маркой заказчика</span>
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
                  Получить прайс
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => navigate('/projects')}
                >
                  Смотреть работы
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Clients */}
      <section className="py-16 bg-secondary/20">
        <div className="container">
          <SectionTitle
            subtitle="Будем полезны, если вы"
            title="Продаете мебель, но нет собственного производства?"
            description="Разработаем чертежи мебели, изготовим, укомплектуем фурнитурой, рассчитаем и закажем комплектующие, доставим готовый комплект. Несем полную ответственность."
            align="center"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {targetClients.map((client, index) => (
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
                      {client.icon}
                    </div>
                    <h3 className="font-medium text-white">{client.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                subtitle="По каждому заказу предоставляем"
                title="Чертежи и подробные сметы"
                align="left"
              />
              
              <div className="space-y-6">
                <div className="bg-secondary/30 rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-bold text-white mb-3">Чертежи мебели на согласование</h3>
                  <p className="text-white/70">
                    Перед выставлением счета высылаем на согласование чертежи мебели. 
                    По проекту можно проверить все параметры, цвет и толщины панелей, 
                    направление текстуры, тип кромки, конструктивные особенности.
                  </p>
                </div>
                
                <div className="bg-secondary/30 rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-bold text-white mb-3">Подробные сметы</h3>
                  <p className="text-white/70">
                    Каждый счет содержит подробную смету на все материалы и фурнитуру. 
                    Всегда можно проверить артикулы, количество, цвета. 
                    Вы получаете полную детализацию по цене и составу.
                  </p>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={factoryProductionImg}
                alt="Производство" 
                className="rounded-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-lg">
                <p className="text-3xl font-bold">11 лет</p>
                <p className="text-sm">опыта работы</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-secondary/10">
        <div className="container">
          <SectionTitle
            subtitle="Наши преимущества"
            title="Стройте продажи и сервис — производством займемся мы"
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
      <section className="py-16">
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

      {/* Production Steps */}
      <section className="py-16 bg-secondary/20">
        <div className="container">
          <SectionTitle
            subtitle="Наше производство"
            title="Работаем с плитой и кромкой EGGER"
            description="Поддерживаем на складе 95 декоров ЛДСП EGGER, кромку, столешницы и фурнитуру"
            align="center"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {productionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-secondary/30 border-border text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 text-accent">
                      {step.icon}
                    </div>
                    <h3 className="font-bold text-white">{step.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              variant="outline"
              onClick={() => navigate('/services/ldsp-egger')}
            >
              Смотреть каталог декоров <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Work Formats */}
      <section className="py-16">
        <div className="container">
          <SectionTitle
            subtitle="Форматы работы"
            title="Удобные форматы сотрудничества"
            align="center"
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            {workFormats.map((format, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-secondary/30 border-border hover:border-accent/50 transition-all h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3">{format.title}</h3>
                    <p className="text-white/70 text-sm mb-4">{format.description}</p>
                    
                    <ul className="space-y-2 mb-4">
                      {format.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-white/80">
                          <CheckCircle2 className="w-4 h-4 text-accent mr-2 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="bg-accent/10 rounded-lg p-3 mt-auto">
                      <p className="text-xs text-accent font-medium">Идеально подойдет:</p>
                      <p className="text-xs text-white/70">{format.ideal}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Stages */}
      <section className="py-16 bg-secondary/10">
        <div className="container">
          <SectionTitle
            subtitle="Этапы работы"
            title="Как работаем"
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
                className="relative"
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

      {/* Delivery */}
      <section className="py-16">
        <div className="container">
          <SectionTitle
            subtitle="Доставка"
            title="Доставляем по Москве и Московской области"
            description="Вся мебель поставляется в упаковке из гофрокартона. Все упаковки имеют маркировочные бирки и штрих-код."
            align="center"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {deliveryPrices.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-secondary/30 border-border h-full">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-accent mb-2">{item.price}</div>
                    <h4 className="font-medium text-white mb-1">{item.zone}</h4>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="flex flex-wrap justify-center gap-2 text-sm text-white/60">
              <span className="bg-secondary/30 px-3 py-1 rounded">Мытищи</span>
              <span className="bg-secondary/30 px-3 py-1 rounded">Химки</span>
              <span className="bg-secondary/30 px-3 py-1 rounded">Балашиха</span>
              <span className="bg-secondary/30 px-3 py-1 rounded">Подольск</span>
              <span className="bg-secondary/30 px-3 py-1 rounded">Королёв</span>
              <span className="bg-secondary/30 px-3 py-1 rounded">Одинцово</span>
              <span className="bg-secondary/30 px-3 py-1 rounded">Люберцы</span>
              <span className="bg-secondary/30 px-3 py-1 rounded">Домодедово</span>
              <span className="bg-secondary/30 px-3 py-1 rounded">и другие...</span>
            </div>
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
            subtitle="Оставить заявку"
            title="Получить прайс"
            description="Оставьте заявку и наш менеджер вышлет вам актуальный прайс в течение дня"
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
              { title: "Мебель под тендер", desc: "Произведем в соответствии с техническим заданием", path: "/services/tenders" },
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

export default ContractProduction;
