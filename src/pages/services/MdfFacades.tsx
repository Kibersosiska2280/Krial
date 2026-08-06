import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "@/components/SectionTitle";
import B2BRequestForm from "@/components/B2BRequestForm";
import { useNavigate } from "react-router-dom";

import mdfFacadesHeroImg from "@/assets/mdf-facades-hero.jpg";
import mdfFacadeWhiteImg from "@/assets/mdf-facade-white.jpg";
import facadeArdenImg from "@/assets/mdf21.png";
import facadeMelouImg from "@/assets/mdf31.png";
import facadeBorgoImg from "@/assets/mdf41.png";
import facadeKramonImg from "@/assets/mdf51.png";
import facadeTorinoImg from "@/assets/mdf61.png";
import facadeSelvinImg from "@/assets/mdf71.png";
import fabricVipveluttiImg from "@/assets/mdf81.png";
import fabricImperia from "@/assets/mdf91.png";
import fabricFusion from "@/assets/mdf101.png";
import fabricDomus from "@/assets/mdf212.png";

import decorAvoriImg from "@/assets/decor-avori-nubuk.jpg";
import decorIceGreyImg from "@/assets/decor-ice-grey.jpg";
import decorBordoImg from "@/assets/decor-bordo.jpg";
import decorQuartzGreyImg from "@/assets/decor-quartz-grey.jpg";
import decorSkyImg from "@/assets/decor-sky.jpg";
import decorSkyGreyImg from "@/assets/decor-sky-grey.jpg";
import decorMistyGreenImg from "@/assets/decor-misty-green.jpg";
import decorLightKhakiImg from "@/assets/decor-light-khaki.jpg";
import decorMilkRicamoImg from "@/assets/decor-milk-ricamo.jpg";
import decorSmokyRicamoImg from "@/assets/decor-smoky-ricamo.jpg";
import decorMilkImg from "@/assets/decor-milk.jpg";
import decorLightGreyImg from "@/assets/decor-light-grey.jpg";

const MdfFacades = () => {
  const navigate = useNavigate();

  const facadeModels = [
    { name: "Тиволи", category: "Стандартные NEW", image: fabricVipveluttiImg },
    { name: "Арден", category: "Стандартные NEW", image: facadeArdenImg },
    { name: "Мелоу", category: "Стандартные NEW", image: facadeMelouImg },
    { name: "Борго", category: "Стандартные", image: facadeBorgoImg },
    { name: "Крамон", category: "Стандартные", image: facadeKramonImg },
    { name: "Бренор", category: "Стандартные", image: fabricFusion },
    { name: "Марсель", category: "Нестандартные", image: fabricImperia },
    { name: "Фарно", category: "Нестандартные", image: fabricFusion },
    { name: "Торино", category: "Нестандартные", image: facadeTorinoImg },
    { name: "Лима", category: "Нестандартные", image: fabricDomus },
    { name: "Селвин", category: "Нестандартные", image: facadeSelvinImg },
  ];

  const decorCatalog = [
    { code: "AS 1802-SFT", name: "Авори нубук абсолют софт", image: decorAvoriImg },
    { code: "TS 812-SFT", name: "Айс грей софт", image: decorIceGreyImg },
    { code: "TS 838-SFT", name: "Бордо софт", image: decorBordoImg },
    { code: "TS 840-SFT", name: "Кварц грей софт", image: decorQuartzGreyImg },
    { code: "TS 841-SFT", name: "Скай софт", image: decorSkyImg },
    { code: "TS 842-SFT", name: "Скай Грей софт", image: decorSkyGreyImg },
    { code: "TS 844-SFT", name: "Мисти грин софт", image: decorMistyGreenImg },
    { code: "TS 845-SFT", name: "Лайт Хаки софт", image: decorLightKhakiImg },
    { code: "ZB 3810-SFT", name: "Милк рикамо софт", image: decorMilkRicamoImg },
    { code: "ZB 3815-SFT", name: "Смоки рикамо софт", image: decorSmokyRicamoImg },
    { code: "ZB 810-SFT", name: "Милк софт", image: decorMilkImg },
    { code: "ZB 811-SFT", name: "Лайт грей софт", image: decorLightGreyImg },
  ];

  const faqItems = [
    { question: "Какой минимальный заказ на фасады?", answer: "Минимальный заказ составляет 5 000 рублей. Это может быть как один крупный фасад, так и несколько небольших." },
    { question: "Какая может быть толщина фасадов?", answer: "Стандартная толщина фасадов МДФ — 16 мм и 19 мм. По индивидуальному заказу возможно изготовление фасадов толщиной 22 мм." },
    { question: "Нужна интегрированная ручка. Сделаете?", answer: "Да, мы изготавливаем фасады с интегрированными ручками различных профилей. Уточните тип ручки при оформлении заказа." },
    { question: "С обратной стороны фасада будут отверстия?", answer: "Присадка под петли и ручки выполняется по вашему техническому заданию. Можем сделать фасады без присадки." },
    { question: "Тыльная сторона фасада может быть в цвет лицевой?", answer: "Да, по индивидуальному заказу изготавливаем фасады с двусторонней облицовкой в одном или разных цветах." },
    { question: "Нужно повторить фасад как на фото. Сделаете?", answer: "Пришлите фото фасада — мы подберем максимально близкий вариант из нашего каталога моделей и декоров." },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background z-10" />
          <img src={mdfFacadesHeroImg} alt="Фасады МДФ" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pt-12 md:pt-20">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">Материалы</span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
                Фасады МДФ <span className="text-accent">для кухонь и мебели</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
                Изготовление мебельных фасадов высокого качества на основе МДФ, 
                облицованных пленкой ПВХ на современном оборудовании по доступной цене.
              </p>
              <p className="text-base md:text-lg text-white/70 mb-8">
                Полностью готовые к установке кухонные фасады — по вашим размерам и с присадкой под фурнитуру, петли, ручки.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={() => document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  Получить прайс
                </Button>
                <Button variant="outline" size="lg" onClick={() => document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' })}>Заказать звонок</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facade Models */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Модели фасадов" title="Модели фасадов МДФ" description="Выберите модель фасада для вашего проекта" align="center" />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {facadeModels.map((facade, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }} viewport={{ once: true }}>
                <Card className="bg-secondary/30 border-border hover:border-accent/50 transition-all cursor-pointer h-full">
                  <CardContent className="p-3 sm:p-4">
                    <div className="aspect-square bg-secondary/50 rounded-lg mb-3 overflow-hidden">
                      <img src={facade.image} alt={facade.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <h3 className="font-bold text-white text-sm sm:text-base">{facade.name}</h3>
                    <p className="text-white/60 text-xs sm:text-sm">Фасад МДФ</p>
                    <span className="inline-block mt-2 text-xs bg-accent/20 text-accent px-2 py-1 rounded">{facade.category}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

 {/* Care Instructions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={mdfFacadeWhiteImg}
                alt="Фасады МДФ"
                className="rounded-lg w-full"
              />
            </motion.div>

            <div>
              <SectionTitle
                subtitle="Уход за фасадами"
                title="Инструкция по уходу за фасадами МДФ"
                align="left"
              />

              <p className="text-white/70 mb-6">
                Для того чтобы фасады сохраняли первоначальный вид,
                скачайте подробную инструкцию по уходу.
              </p>

              <a href="/files/instruction.pdf" download>
                <Button variant="outline" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Скачать инструкцию
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

    {/* Decor Catalog */}
<section className="py-16 bg-secondary/10">
  <div className="container mx-auto px-4">
    <SectionTitle
      subtitle="Каталог декоров"
      title="Каталог декоров пленки ПВХ"
      description="Широкий выбор цветов и текстур для ваших фасадов"
      align="center"
    />

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
      {decorCatalog.map((decor, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          viewport={{ once: true }}
        >
          <Card className="bg-secondary/30 border-border hover:border-accent/50 transition-all">
            <CardContent className="p-3 sm:p-4">
              <div className="aspect-square rounded-lg mb-3 overflow-hidden">
                <img
                  src={decor.image}
                  alt={decor.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-xs text-accent font-mono mb-1">
                {decor.code}
              </p>
              <h3 className="font-medium text-white text-xs sm:text-sm">
                {decor.name}
              </h3>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>

    <div className="text-center mt-8">
      <p className="text-white/60 mb-4 text-sm sm:text-base">
        Технические ограничения, возможности, правила эксплуатации и приемки фасадов МДФ смотрите в документе
      </p>

      <a href="/files/pvx.docx" download>
        <Button variant="outline" size="lg">
          <Download className="w-4 h-4 mr-2" />
          Скачать каталог
        </Button>
      </a>
    </div>
  </div>
</section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Вопросы и ответы" title="Остались вопросы?" align="center" />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-secondary/30 border border-border rounded-lg px-4 sm:px-6">
                  <AccordionTrigger className="text-white hover:text-accent text-sm sm:text-base">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-white/70 text-sm">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* B2B Notice */}
      <section className="py-12 bg-accent/10 border-y border-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Принимаем заказы от юр. лиц и ИП</h3>
            <p className="text-white/70 mb-6 text-sm sm:text-base">
              Мы принимаем заказы от юридических лиц (ЮЛ) и ИП, чья деятельность связана с продажей, 
              комплектацией, производством мебели. Цены на фасады МДФ на сайте действительны для ЮЛ и ИП.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={() => document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Начать работать
            </Button>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section id="request-form" className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Оставить заявку" title="Получить прайс на фасады МДФ" description="Оставьте заявку и наш менеджер вышлет вам актуальный прайс" align="center" />
          <B2BRequestForm />
        </div>
      </section>
    </div>
  );
};

export default MdfFacades;
