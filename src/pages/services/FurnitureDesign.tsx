import { motion } from "framer-motion";
import { 
  PenTool, 
  FileCheck, 
  Cpu, 
  CheckCircle2,
  Layers,
  Box,
  Settings,
  Monitor,
  Package,
  FileText,
  ArrowRight,
  Ruler,
  Cog
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from "@/components/SectionTitle";
import B2BRequestForm from "@/components/B2BRequestForm";
import { useNavigate } from "react-router-dom";

import furnitureDesignImg from "@/assets/furniture-design.jpg";

const FurnitureDesign = () => {
  const navigate = useNavigate();

  const designFeatures = [
    { icon: <Ruler className="w-6 h-6" />, title: "Проектируем, рассчитываем размеры" },
    { icon: <Settings className="w-6 h-6" />, title: "Подбираем фурнитуру, назначаем присадку" },
    { icon: <Layers className="w-6 h-6" />, title: "Разрабатываем карты фасадов" },
    { icon: <FileText className="w-6 h-6" />, title: "Формируем сметы на все комплектующие" },
  ];

  const catalogTypes = [
    { icon: <Box className="w-8 h-8" />, title: "Схемы каркасов", status: "Доступно" },
    { icon: <Package className="w-8 h-8" />, title: "Системы фасадов", status: "Доступно" },
    { icon: <Cog className="w-8 h-8" />, title: "Типы ящиков", status: "Доступно" },
  ];

  const deliverables = [
    {
      title: "Чертежи мебели на согласование",
      description: "Перед выставлением счета высылаем на согласование чертежи мебели. По проекту можно проверить все размеры, цвет и толщины панелей, направление текстуры, тип кромки, конструктивные особенности.",
      cta: "Смотреть пример"
    },
    {
      title: "Подробные сметы с составом заказа",
      description: "Каждый счет содержит подробную смету на все материалы и фурнитуру, входящие в заказ. Всегда можно проверить артикулы, количество, цвета. Вы получаете полную детализацию по цене заказа и составу.",
      cta: "Смотреть пример"
    },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background z-10" />
          <img 
            src={furnitureDesignImg}
            alt="Проектирование мебели" 
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
                Проектирование
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
                Проектирование мебели{" "}
                <span className="text-accent">в БАЗИС-Мебельщик</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-2xl">
                Разработаем чертежи мебели, рассчитаем комплектующие. 
                Несем полную ответственность.
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

      {/* Design Features */}
      <section className="py-16 bg-secondary/20">
        <div className="container">
          <SectionTitle
            subtitle="Конструкторский отдел"
            title="Конструкторский отдел работает над каждым заказом"
            description="Услуга платная, предоставляется при условии покупки мебели или мебельных деталей производства фабрики."
            align="center"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {designFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-secondary/30 border-border hover:border-accent/50 transition-all text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 text-accent">
                      {feature.icon}
                    </div>
                    <h3 className="font-medium text-white text-sm">{feature.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal Errors */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                subtitle="Наш подход"
                title="Минимум ошибок в проектах"
                align="left"
              />
              
              <p className="text-white/70 mb-6">
                Мы за системный подход. Любую, самую нестандартную мебель, можно спроектировать, 
                руководствуясь набором принципов. Мы создаем каталог типовых решений для мебели 
                по индивидуальным размерам, который будет доступен всем нашим партнерам. 
                Цель — полностью исключить ошибки проектирования.
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                {catalogTypes.map((type, index) => (
                  <Card key={index} className="bg-secondary/30 border-border text-center">
                    <CardContent className="p-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-2 text-accent">
                        {type.icon}
                      </div>
                      <h3 className="font-medium text-white text-sm">{type.title}</h3>
                      <span className="text-accent text-xs">{type.status}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                <h4 className="font-bold text-white mb-2">
                  Получите доступ к первому на рынке b2b онлайн-каталогу
                </h4>
                <p className="text-white/70 text-sm mb-4">
                  Каталог по проектированию мебели поможет исключить ошибки проектирования
                </p>
                <Button 
                  className="bg-accent hover:bg-accent/90"
                  onClick={() => document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Получить доступ
                </Button>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-secondary/30 border-border">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <Monitor className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-xl">БАЗИС-Мебельщик</h3>
                      <p className="text-white/60 text-sm">Лицензионное ПО</p>
                    </div>
                  </div>
                  
                  <p className="text-white/70 mb-6">
                    Лицензионное ПО позволяет отправлять проекты прямиком на ЧПУ станки, 
                    исключая человеческий фактор. Синхронизация БАЗИС-Мебельщик и 1С делает 
                    возможным получение подробных смет с комплектацией заказов и актуальными ценами.
                  </p>
                  
                  <ul className="space-y-3">
                    {["Автоматическая проверка на ошибки", "Прямая отправка на ЧПУ", "Синхронизация с 1С", "Актуальные цены в сметах"].map((item, i) => (
                      <li key={i} className="flex items-center text-white/80">
                        <CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 bg-secondary/10">
        <div className="container">
          <SectionTitle
            subtitle="По каждому заказу предоставляем"
            title="Что вы получаете"
            align="center"
          />
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-secondary/30 border-border hover:border-accent/50 transition-all h-full">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 text-accent">
                      <FileCheck className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/70 mb-4">{item.description}</p>
                    <Button variant="link" className="text-accent p-0">
                      {item.cta} <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Furniture & Hardware */}
      <section className="py-16">
        <div className="container">
          <SectionTitle
            subtitle="Проектирование"
            title="Разрабатываем конструктив и присадку под любую фурнитуру"
            description="Для всей фурнитуры в комплекте закладываем в проект присадку на корпусе и фасадах без дополнительной платы."
            align="center"
          />
          
          <div className="bg-secondary/20 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-white mb-4">Проектирование мебели на заказ</h4>
                <p className="text-white/70 text-sm mb-4">
                  Производство мебели начинается с этапа проектирования и подготовки конструкторской документации. 
                  Получив от заказчика проект дизайна мебели, конструктор оценивает возможность изготовления 
                  и реализации всего заложенного функционала.
                </p>
                <p className="text-white/70 text-sm">
                  Проектирование мебели на заказ гораздо сложнее проектирования стандартной мебели, 
                  требует большего навыка конструктора.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Что учитываем</h4>
                <ul className="space-y-2">
                  {[
                    "Все фасады открываются без помех",
                    "Доступ ко всем ящикам в шкафах-купе",
                    "Изготовление на оборудовании фабрики",
                    "Минимум операций ручной обработки",
                    "Индивидуальные размеры и комплектация",
                    "Оптимизация конструкции"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-white/80 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent mr-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
            description="Оставьте заявку и наш менеджер вышлет вам актуальный прайс в течение 15 минут"
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
              { title: "Распил ЛДСП", desc: "Распил, кромление и сверление ЛДСП по доступной цене", path: "/services/ldsp-egger" },
              { title: "Индивидуальные проекты", desc: "Изготавливаем мебель по индивидуальным проектам", path: "/services/custom-furniture" },
              { title: "Контрактное производство", desc: "Выпустим мебель под маркой заказчика", path: "/services/contract" },
              { title: "Производство для тендеров", desc: "Произведем в соответствии с ТЗ", path: "/services/tenders" },
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

export default FurnitureDesign;
