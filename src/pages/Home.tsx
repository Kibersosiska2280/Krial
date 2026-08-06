import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Users, Truck, FileCheck, Clock, Package, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroVideo from "@/assets/hero-video.mp4";

import heroBackgroundImg from "@/assets/hero-background.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">

  {/* Video Background */}
  <div className="absolute inset-0 -z-10">
    <video
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={heroVideo} type="video/mp4" />
    </video>

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/70"></div>
  </div>

  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="max-w-3xl"
    >
      <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
        Производство для бизнеса с 2015 года
      </span>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
        Ваш надежный производственный партнер
      </h1>

      <p className="text-white/70 text-xl md:text-2xl mb-8 font-light max-w-xl">
        Наша задача — избавить вас от забот, связанных с мебельным производством.
        Стройте продажи, создавайте хороший дизайн. Проектированием,
        производством и доставкой займемся мы.
      </p>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90"
          onClick={() => window.location.href = "/services"}
        >
          Наши услуги
          <ArrowRight size={16} className="ml-2" />
        </Button>

        <Button
          size="lg"
          variant="outline"
          onClick={() => window.location.href = "/contacts"}
        >
          Получить прайс
        </Button>
      </div>
    </motion.div>
  </div>

</section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1D3F65] border-y border-[#1D3F65]/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "4000 м²", label: "Площадь производства", suffix: "" },
              { value: "2500 м²", label: "Производственная загрузка в неделю", suffix: "+" },
              { value: "12+", label: "Брендов-партнеров", suffix: "" },
              { value: "7 дней", label: "Стандартный срок изготовления", suffix: "" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By / Social Proof */}
      <section className="py-14 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-white/50 text-sm uppercase tracking-widest mb-8"
          >
            Нам доверяют производство более 500 компаний
          </motion.p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {["EGGER", "KRONOSPAN", "BLUM", "HETTICH", "ALVIC", "FENIX"].map((brand, i) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center justify-center h-16 bg-secondary/40 border border-border rounded-lg text-white/70 hover:text-accent hover:border-accent/40 transition-colors font-display font-semibold tracking-wider"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-xl mx-auto mb-16"
          >
            <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-2 block">
              Для бизнеса
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-white">
              Услуги для B2B клиентов
            </h2>
            <p className="text-white/70">
              Полный цикл производства мебели — от проектирования до доставки готового комплекта
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Контрактное производство",
                description: "Производим мебель под маркой заказчика. Полная ответственность за качество и сроки.",
                icon: <Factory className="w-8 h-8" />,
                link: "/services/contract",
              },
              {
                title: "Производство для тендеров",
                description: "Работаем с аукционной документацией, выполняем ТЗ любой сложности.",
                icon: <FileCheck className="w-8 h-8" />,
                link: "/services/tenders",
              },
              {
                title: "Проектирование мебели",
                description: "Разрабатываем чертежи в БАЗИС-Мебельщик, рассчитываем комплектующие.",
                icon: <Package className="w-8 h-8" />,
                link: "/services/design",
              },
              {
                title: "Распил ЛДСП EGGER",
                description: "Минимум 95 декоров на складе. Распил, кромление, сверление на ЧПУ.",
                icon: <Factory className="w-8 h-8" />,
                link: "/cutting/ldsp",
              },
              {
                title: "Фасады МДФ",
                description: "Фасады МДФ с пленкой ПВХ, готовые к установке с присадкой.",
                icon: <Package className="w-8 h-8" />,
                link: "/materials/mdf-facades",
              },
              {
                title: "Мебель по индивидуальным размерам",
                description: "Производим мебель под нестандартные размеры и проекты любой сложности.",
                icon: <Package className="w-8 h-8" />,
                link: "/services/custom-furniture",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={service.link} className="block group">
                  <div className="bg-background/30 backdrop-blur-sm border border-border p-6 rounded-lg hover:border-accent/40 transition-colors h-full">
                    <div className="text-accent mb-4">{service.icon}</div>
                    <h3 className="text-xl font-medium mb-2 text-white group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/70">{service.description}</p>
                    <div className="flex items-center text-accent mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="mr-2 text-sm">Подробнее</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* Values Section */}
<section
  className="py-20"
  style={{ backgroundColor: '#1D3F65', color: '#1D3F65' }}
>
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center max-w-xl mx-auto mb-16"
    >
      <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-2 block">
        Наши ценности
      </span>
      <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-[#FFFFFF] !text-[#FFFFFF]">
        Мебель под вашим брендом — производство под нашим контролем
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          title: "Чёткий регламент работы",
          description:
            "От технического задания до готового комплекта — каждый этап проходит по утверждённому процессу. Над проектом работают профильные специалисты.",
          icon: "✓",
        },
        {
          title: "Цифровое производство без брака",
          description:
            "Современное оборудование и автоматизированные процессы обеспечивают точную геометрию и лёгкую сборку без переделок.",
          icon: "✧",
        },
        {
          title: "Прозрачность и отчётность",
          description:
            "Вы всегда знаете статус проекта. Предоставляем полный пакет документов и отчётность для бухгалтерии.",
          icon: "♦",
        },
      ].map((value, index) => (
        <motion.div
          key={index}
          className="bg-secondary/70 border border-border rounded-lg p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-12 flex items-center justify-center bg-accent/10 text-accent rounded-full mb-4 text-xl">
            {value.icon}
          </div>
          <h3 className="text-xl font-medium mb-2 text-white">
            {value.title}
          </h3>
          <p className="text-white/70">
            {value.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-xl mx-auto mb-16"
          >
            <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-2 block">
              Почему мы
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-white">
              Преимущества KriAl_mebel
            </h2>
            <p className="text-white/70">
              11 лет производим мебель для B2B клиентов по всей России
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Собственное производство",
                description: "Контролируем все этапы - от раскроя до упаковки.",
                icon: <Factory className="w-6 h-6" />,
              },
              {
                title: "Работаем с НДС",
                description: "Полный пакет документов для бухгалтерии",
                icon: <FileCheck className="w-6 h-6" />,
              },
              {
                title: "Производство под вашим брендом",
                description: "Изготавливаем продукцию под вашей торговой маркой с сохранением конфиденциальности и стандартов качества.",
                icon: <Truck className="w-6 h-6" />,
              },
              {
                title: "Работа со сложными проектами",
                description: "Реализуем нестандартные дизайнерские решения и работаем по сложным техническим заданиям.",
                icon: <Clock className="w-6 h-6" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary/30 border border-border p-6 rounded-lg"
              >
                <div className="text-accent mb-4">{item.icon}</div>
                <h3 className="text-lg font-medium mb-2 text-white">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Clients */}
     <section
  className="py-20"
  style={{ backgroundColor: '#1D3F65', color: '#1D3F65' }}
>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-xl mx-auto mb-16"
          >
            <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-2 block">
              Наши клиенты
            </span>
             <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-[#FFFFFF] !text-[#FFFFFF]">
              Кому будем полезны
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Мебельные стартапы",
              "Дизайн-студии",
              "Магазины мебели",
              "Компании ремонта под ключ",
              "Исполнители тендеров",
              "Производители кухонь",
              "Архитектурные бюро",
              "Мебельные мастера",
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="bg-background/30 border border-border px-4 py-3 rounded-lg text-center">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-white text-sm">{client}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* Materials Section */}
<section className="py-20 bg-secondary/30">
  <div className="container mx-auto px-4">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-primary">
        Работаем с лучшими материалами и фурнитурой
      </h2>
      <p className="text-muted-foreground">
        Используем проверенные бренды, чтобы вы были уверены в качестве,
        а ваши клиенты — довольны результатом.
      </p>
    </motion.div>

    {/* Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">

      <div>
        <h3 className="text-lg font-semibold mb-3 text-primary">
          Материалы
        </h3>
        <p className="text-muted-foreground">
          ЛДСП / МДФ / Массив
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 text-primary">
          Плитные материалы
        </h3>
        <p className="text-muted-foreground">
          EGGER / KRONOSPAN / LAMARTY
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 text-primary">
          Декоративные фасадные материалы
        </h3>
        <p className="text-muted-foreground">
          ALVIC / ETERNO / KASTAMONU / FENIX
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 text-primary">
          Фурнитура
        </h3>
        <p className="text-muted-foreground">
          BLUM / HETTICH / BOYARD / FIRMAX / MAKMART
        </p>
      </div>

  </div>
        </div>
      </section>


{/* Work Stages Section */}
<section className="py-24 bg-secondary/20 border-y border-white/5">
  <div className="container mx-auto px-4">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center max-w-2xl mx-auto mb-20"
    >
      <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-2 block">
        Этапы работы
      </span>
      <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-white">
        Чёткий процесс — прозрачный результат
      </h2>
      <p className="text-white/70">
        От первого запроса до передачи готового проекта.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Запрос",
          description:
            "Вы отправляете задание, замеры или эскиз. Наш менеджер связывается с вами для уточнения деталей и подготовки предварительного расчета.",
        },
        {
          title: "Расчет",
          description:
            "Мы разрабатываем конструктив, готовим спецификацию и окончательную смету. Вы проверяете и утверждаете проект  ",
        },
        {
          title: "Производство и контроль",
          description:
            "Разрабатываем конструктив и спецификацию.",
        },
        {
          title: "Согласование",
          description:
            "Мы запускаем заказ в цех. Предоставляем фотоотчеты о ключевых этапах работы.",
        },
        {
          title: "Комплектация и упаковка",
          description:
            "Мы комплектуем заказ всей необходимой фурнитурой, упаковываем каждый элемент и формируем промаркированные поставки.",
        },
        {
          title: "Доставка и отчет",
          description:
            "Доставляем мебель на ваш склад или напрямую вашему клиенту. Передаем полный пакет документов.",
        },
      ].map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          viewport={{ once: true }}
          className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition"
        >
          <div className="absolute -top-5 left-8 w-10 h-10 flex items-center justify-center bg-accent text-white rounded-full text-sm font-semibold shadow-lg">
            {index + 1}
          </div>

          <h3 className="text-lg font-semibold mb-3 mt-6 text-white">
            {step.title}
          </h3>

          <p className="text-white/70 text-sm leading-relaxed">
            {step.description}
          </p>
        </motion.div>
      ))}
    </div>

    <div className="text-center mt-20">
      <Button
        size="lg"
        className="bg-accent hover:bg-accent/90 px-8"
        onClick={() => window.location.href = "/contacts"}
      >
        Рассчитать стоимость проекта
      </Button>
    </div>

  </div>
</section>
      
      {/* Testimonials */}
     <section
  className="py-20"
  style={{ backgroundColor: '#1D3F65', color: '#1D3F65' }}
>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-xl mx-auto mb-16"
          >
            <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-2 block">
              Отзывы
            </span>
             <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-[#FFFFFF] !text-[#FFFFFF]">
              Что говорят наши партнёры
            </h2>
            <p className="text-white/70">
              Более 500 компаний уже работают с нами
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                author: "Анна К.",
                position: "Владелец дизайн-студии",
                content:
                  "Работаю с KriAl_mebel уже более 2 лет. Всегда качественное исполнение, внимание к деталям и точное соблюдение сроков. Рекомендую как надежного производителя мебели.",
                rating: 5,
              },
              {
                author: "Сергей П.",
                position: "Магазин кухонь",
                content:
                  "Заказываем всю корпусную мебель здесь. Результат всегда на высоте! Особенно нравится возможность комплектации фурнитурой и доставка до клиента.",
                rating: 5,
              },
              {
                author: "Мария Д.",
                position: "Исполнитель тендеров",
                content:
                  "Выполняют сложные ТЗ, работают с документацией. Качество стабильное, сроки соблюдают. Рекомендую для тендерных проектов.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary rounded-lg p-6"
              >
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating ? "text-accent fill-accent" : "text-muted-foreground"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                
                <div className="mb-6">
                  <p className="text-white/80 text-base leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="mr-3 h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-semibold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium">{testimonial.author}</h4>
                    <p className="text-white/50 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent/10 border-y border-accent/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:max-w-2xl mb-10 lg:mb-0"
            >
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-white">
                Готовы начать сотрудничество?
              </h2>
              <p className="text-white/70 mb-6">
                Отправьте техническое задание или опишите задачу. 
                Мы подготовим расчёт стоимости в течение дня.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90"
                  onClick={() => window.location.href = "/contacts"}
                >
                  Отправить заявку
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.location.href = "tel:+79374019738"}
                >
                  +7 (937) 401-97-38
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:text-right"
            >
              <div className="bg-secondary/50 rounded-lg p-6 border border-border">
                <h3 className="text-lg font-medium text-white mb-4">Наш адрес</h3>
                <p className="text-white/70 mb-2">г. Кузнецк, ул. Гагарина 53/1</p>
                <p className="text-white/70 mb-2">domlight@mail.ru</p>
                <p className="text-accent font-medium">+7 (937) 401-97-38</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
