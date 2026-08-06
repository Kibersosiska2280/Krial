import { motion } from "framer-motion";

const Offer = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8">Публичная оферта</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-white/80">
            <p className="text-lg">
              Настоящий документ является официальным предложением (публичной офертой) 
              ДомЛайт о заключении договора на оказание услуг по производству и поставке мебели.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8">1. Термины и определения</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Оферта</strong> – настоящее предложение о заключении договора</li>
              <li><strong>Исполнитель</strong> – ДомЛайт</li>
              <li><strong>Заказчик</strong> – юридическое лицо или ИП, принимающее условия оферты</li>
              <li><strong>Акцепт</strong> – полное и безоговорочное принятие условий оферты</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8">2. Предмет оферты</h2>
            <p>
              Исполнитель обязуется оказать услуги по производству мебели и/или 
              мебельных комплектующих в соответствии с техническим заданием Заказчика, 
              а Заказчик обязуется принять и оплатить указанные услуги.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8">3. Условия акцепта</h2>
            <p>
              Акцептом оферты является совершение Заказчиком следующих действий:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Оформление заказа через сайт или по электронной почте</li>
              <li>Оплата счета (полная или частичная)</li>
              <li>Подписание договора или спецификации</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8">4. Порядок оформления заказа</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Заказчик направляет техническое задание или чертежи</li>
              <li>Исполнитель производит расчет стоимости и сроков</li>
              <li>После согласования выставляется счет на оплату</li>
              <li>После оплаты заказ передается в производство</li>
            </ol>

            <h2 className="text-2xl font-semibold text-white mt-8">5. Стоимость и порядок оплаты</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Стоимость определяется индивидуально для каждого заказа</li>
              <li>Предоплата составляет 50-100% в зависимости от объема заказа</li>
              <li>Оплата производится безналичным расчетом</li>
              <li>Исполнитель работает с НДС</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8">6. Сроки выполнения</h2>
            <p>
              Стандартный срок производства составляет 11 рабочих дней для материалов 
              со складской программы. Для заказных материалов срок увеличивается.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8">7. Доставка</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Доставка по Москве и до 100 км за МКАД с подъемом</li>
              <li>Доставка в регионы транспортными компаниями</li>
              <li>Стоимость доставки рассчитывается отдельно</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8">8. Гарантии качества</h2>
            <p>
              Исполнитель гарантирует соответствие продукции техническому заданию 
              и действующим стандартам качества. Гарантийный срок оговаривается 
              в спецификации к заказу.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8">9. Ответственность сторон</h2>
            <p>
              Стороны несут ответственность за неисполнение или ненадлежащее исполнение 
              обязательств в соответствии с законодательством РФ.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8">10. Форс-мажор</h2>
            <p>
              Стороны освобождаются от ответственности при наступлении обстоятельств 
              непреодолимой силы, о которых необходимо уведомить другую сторону 
              в течение 5 рабочих дней.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8">11. Разрешение споров</h2>
            <p>
              Споры разрешаются путем переговоров. При недостижении согласия — 
              в арбитражном суде по месту нахождения Исполнителя.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8">12. Реквизиты Исполнителя</h2>
            <p>
              ДомЛайт<br />
              Адрес: г. Кузнецк, ул. Гагарина 53/1<br />
              Телефон: +7 (937) 401-97-38<br />
              Email: domlight@mail.ru
            </p>

            <p className="text-sm text-white/60 mt-8">
              Дата публикации оферты: {new Date().toLocaleDateString('ru-RU')}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Offer;
