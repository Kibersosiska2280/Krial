import { motion } from "framer-motion";

const Cookies = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8">Политика использования Cookie</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-white/80">
            <p className="text-lg">
              Настоящая Политика описывает, как сайт ДомЛайт использует файлы cookie 
              и аналогичные технологии для обеспечения работы сайта и улучшения 
              пользовательского опыта.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8">1. Что такое Cookie?</h2>
            <p>
              Cookie — это небольшие текстовые файлы, которые сохраняются на вашем 
              устройстве при посещении веб-сайта. Они позволяют сайту запоминать 
              ваши действия и настройки.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8">2. Типы используемых Cookie</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6">2.1. Необходимые Cookie</h3>
            <p>
              Эти файлы необходимы для работы сайта. Без них невозможно использование 
              основных функций: навигации, доступа к защищенным разделам, оформления заказов.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Идентификация сессии пользователя</li>
              <li>Сохранение товаров в корзине</li>
              <li>Обеспечение безопасности</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6">2.2. Функциональные Cookie</h3>
            <p>
              Позволяют запоминать ваши предпочтения и настройки:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Языковые настройки</li>
              <li>Регион доставки</li>
              <li>Настройки отображения</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6">2.3. Аналитические Cookie</h3>
            <p>
              Помогают нам понять, как посетители взаимодействуют с сайтом:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Количество посещений страниц</li>
              <li>Источники трафика</li>
              <li>Время, проведенное на сайте</li>
              <li>Популярные разделы сайта</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6">2.4. Маркетинговые Cookie</h3>
            <p>
              Используются для показа релевантной рекламы:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Отслеживание просмотренных товаров</li>
              <li>Персонализация рекламных предложений</li>
              <li>Измерение эффективности рекламы</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8">3. Срок хранения Cookie</h2>
            <table className="w-full border-collapse border border-border mt-4">
              <thead>
                <tr className="bg-secondary/50">
                  <th className="border border-border p-3 text-left text-white">Тип</th>
                  <th className="border border-border p-3 text-left text-white">Срок хранения</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3">Сессионные</td>
                  <td className="border border-border p-3">До закрытия браузера</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">Постоянные</td>
                  <td className="border border-border p-3">От 1 месяца до 2 лет</td>
                </tr>
                <tr>
                  <td className="border border-border p-3">Аналитические</td>
                  <td className="border border-border p-3">До 2 лет</td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-2xl font-semibold text-white mt-8">4. Управление Cookie</h2>
            <p>
              Вы можете контролировать использование cookie следующими способами:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Настройки браузера:</strong> Большинство браузеров позволяют блокировать или удалять cookie</li>
              <li><strong>Баннер согласия:</strong> При первом посещении сайта вы можете выбрать типы cookie</li>
              <li><strong>Приватный режим:</strong> Используйте режим инкогнито для автоматического удаления cookie</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8">5. Последствия отключения Cookie</h2>
            <p>
              При отключении cookie некоторые функции сайта могут работать некорректно:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Невозможность добавления товаров в корзину</li>
              <li>Необходимость повторной авторизации</li>
              <li>Потеря сохраненных настроек</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8">6. Сторонние Cookie</h2>
            <p>
              На нашем сайте могут использоваться cookie от следующих сервисов:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Яндекс.Метрика — для аналитики</li>
              <li>Google Analytics — для аналитики</li>
              <li>Социальные сети — для кнопок «Поделиться»</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8">7. Изменения в политике</h2>
            <p>
              Мы можем обновлять эту Политику. Изменения вступают в силу с момента 
              публикации на сайте. Рекомендуем периодически проверять актуальность.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8">8. Контакты</h2>
            <p>
              По вопросам использования cookie обращайтесь:<br />
              Email: domlight@mail.ru<br />
              Телефон: +7 (937) 401-97-38<br />
              Адрес: г. Кузнецк, ул. Гагарина 53/1
            </p>

            <p className="text-sm text-white/60 mt-8">
              Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies;
