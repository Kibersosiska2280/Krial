import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8">Политика конфиденциальности</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-white/80">
            <p className="text-lg">
              Настоящая Политика конфиденциальности персональных данных (далее – Политика) 
              действует в отношении всей информации, которую сайт KriAl_mebel может получить 
              о Пользователе во время использования сайта.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8">1. Определение терминов</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Сайт</strong> – интернет-ресурс, расположенный по адресу domlight.ru</li>
              <li><strong>Пользователь</strong> – лицо, имеющее доступ к Сайту</li>
              <li><strong>Персональные данные</strong> – любая информация, относящаяся к Пользователю</li>
              <li><strong>Cookies</strong> – небольшие файлы данных, отправляемые веб-сервером</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8">2. Общие положения</h2>
            <p>
              Использование сайта означает согласие Пользователя с настоящей Политикой. 
              В случае несогласия с условиями Политики Пользователь должен прекратить 
              использование сайта.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8">3. Предмет политики</h2>
            <p>
              Настоящая Политика устанавливает обязательства Администрации сайта 
              по неразглашению и обеспечению режима защиты конфиденциальности 
              персональных данных Пользователя.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8">4. Персональные данные</h2>
            <p>Мы можем собирать следующую информацию:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Имя и фамилия</li>
              <li>Контактный телефон</li>
              <li>Адрес электронной почты</li>
              <li>Адрес доставки</li>
              <li>Информация о заказах</li>
              <li>IP-адрес и данные о браузере</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8">5. Цели сбора данных</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Идентификация Пользователя</li>
              <li>Обработка и выполнение заказов</li>
              <li>Связь с Пользователем</li>
              <li>Улучшение качества сервиса</li>
              <li>Отправка информационных материалов (при согласии)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8">6. Защита данных</h2>
            <p>
              Администрация сайта принимает необходимые организационные и технические 
              меры для защиты персональной информации Пользователя от неправомерного 
              или случайного доступа, уничтожения, изменения, блокирования, копирования, 
              распространения.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8">7. Права пользователя</h2>
            <p>Пользователь имеет право:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Получить информацию о своих персональных данных</li>
              <li>Требовать уточнения, блокирования или уничтожения данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8">8. Контактная информация</h2>
            <p>
              По вопросам, связанным с настоящей Политикой, обращайтесь:<br />
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

export default Privacy;
