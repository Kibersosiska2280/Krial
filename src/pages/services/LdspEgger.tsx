import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/SectionTitle";
import B2BRequestForm from "@/components/B2BRequestForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ldspProducts, ldspCategories, thicknessOptions, edgingPrices } from "@/mock/ldspCatalog";
import { Check, Truck, Shield, Clock, ArrowRight, Phone } from "lucide-react";
import eggerProductionImg from "@/assets/egger-production.jpg";
import deliveryTruckImg from "@/assets/delivery-truck.jpg";

const LdspEgger = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const filteredProducts = selectedCategory === "Все" 
    ? ldspProducts 
    : ldspProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-24">
      {/* Hero секция */}
      <section className="relative py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
              Официальный дистрибьютор
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ЛДСП <span className="text-accent">EGGER</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Австрийское качество по доступным ценам. Более 300 декоров в наличии. 
              Оптовые поставки для производителей мебели.
            </p>
          </motion.div>
        </div>
      </section>

      {/* О компании EGGER */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">О компании EGGER</h2>
            <p className="text-muted-foreground mb-4">
              EGGER — один из ведущих мировых производителей древесных материалов с более чем 60-летней историей. 
              Компания основана в 1961 году в Австрии и сегодня имеет 20 производственных площадок по всему миру.
            </p>
            <p className="text-muted-foreground mb-6">
              ЛДСП EGGER отличается высочайшим качеством, экологичностью и широким выбором декоров — 
              от классических однотонных до реалистичных имитаций дерева и камня.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-accent">
                <Shield size={20} />
                <span>Гарантия качества</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <Check size={20} />
                <span>Класс эмиссии E1</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden"
          >
            <img 
              src={eggerProductionImg}
              alt="EGGER производство"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Характеристики толщины */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Характеристики" 
            subtitle="Доступные толщины и кромка"
          />
          
          <div className="grid md:grid-cols-5 gap-6 mt-10">
            {thicknessOptions.map((thickness, index) => (
              <motion.div
                key={thickness}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background border border-border rounded-xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-accent mb-2">{thickness}</div>
                <p className="text-muted-foreground">Толщина ЛДСП</p>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-accent/10 border border-accent/30 rounded-xl p-6 text-center"
            >
              <div className="text-4xl font-bold text-accent mb-2">ABS</div>
              <p className="text-muted-foreground">Кромка 0.4-2мм</p>
            </motion.div>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {Object.entries(edgingPrices).map(([type, price], index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background border border-border rounded-xl p-6 flex justify-between items-center"
              >
                <span className="font-medium">Кромка {type}</span>
                <span className="text-accent font-bold">{price} ₽/м.п.</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Каталог цветов */}
      <section className="py-16 container mx-auto px-4">
        <SectionTitle 
          title="Каталог цветов ЛДСП EGGER" 
          subtitle="Выберите идеальный декор для вашего проекта"
        />

        {/* Фильтры */}
        <div className="flex flex-wrap gap-3 mt-8 mb-10">
          {ldspCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-accent text-white" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Продукты */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-secondary border border-border rounded-xl overflow-hidden hover-lift cursor-pointer group"
              onClick={() => setSelectedProduct(product.id)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-accent mb-1">{product.code}</p>
                <h3 className="font-medium mb-2 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.thickness.map(t => (
                    <Badge key={t} variant="outline" className="text-xs">{t}</Badge>
                  ))}
                </div>
                <p className="text-accent font-bold">от {product.pricePerSheet.toLocaleString()} ₽/лист</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Как заказать */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Как заказать ЛДСП" 
            subtitle="Простой процесс оформления заказа"
          />

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {[
              { step: "01", title: "Оставьте заявку", desc: "Заполните форму или позвоните нам" },
              { step: "02", title: "Подбор декоров", desc: "Менеджер поможет выбрать нужные декоры" },
              { step: "03", title: "Расчёт стоимости", desc: "Получите коммерческое предложение" },
              { step: "04", title: "Доставка", desc: "Доставим в удобное для вас время" },
            ].map((item, index) => (
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

      {/* Доставка */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Доставка по всей России</h2>
            <div className="space-y-4">
              {[
                { icon: Truck, text: "Собственный автопарк для надёжной доставки" },
                { icon: Clock, text: "Доставка в течение 1-3 дней по городу" },
                { icon: Shield, text: "Бережная транспортировка материалов" },
                { icon: Check, text: "Бесплатная доставка от 50 000 ₽" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                    <item.icon size={20} />
                  </div>
                  <p className="pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src={deliveryTruckImg}
              alt="Доставка"
              className="rounded-xl w-full h-[350px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Прайс-лист */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Прайс-лист" 
            subtitle="Цены на ЛДСП EGGER"
          />

          <div className="max-w-3xl mx-auto mt-10">
            <div className="bg-background border border-border rounded-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-secondary">
                  <tr>
                    <th className="text-left p-4 font-medium">Толщина</th>
                    <th className="text-left p-4 font-medium">Размер листа</th>
                    <th className="text-right p-4 font-medium">Цена</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { thickness: "8 мм", size: "2800x2070 мм", price: "от 1 950 ₽" },
                    { thickness: "10 мм", size: "2800x2070 мм", price: "от 2 150 ₽" },
                    { thickness: "16 мм", size: "2800x2070 мм", price: "от 2 450 ₽" },
                    { thickness: "25 мм", size: "2800x2070 мм", price: "от 3 200 ₽" },
                  ].map((item, index) => (
                    <tr key={index} className="border-t border-border">
                      <td className="p-4 font-medium">{item.thickness}</td>
                      <td className="p-4 text-muted-foreground">{item.size}</td>
                      <td className="p-4 text-right text-accent font-bold">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-center text-muted-foreground mt-4">
              * Цены указаны за лист. Для оптовых заказов действуют специальные условия.
            </p>
          </div>
        </div>
      </section>

      {/* Форма заявки */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <SectionTitle 
            title="Оставить заявку" 
            subtitle="Получите коммерческое предложение"
          />
          <div className="mt-10">
            <B2BRequestForm serviceType="ЛДСП EGGER" />
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Остались вопросы?</h2>
          <p className="text-xl mb-8 opacity-90">Позвоните нам — мы поможем с выбором</p>
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

export default LdspEgger;
