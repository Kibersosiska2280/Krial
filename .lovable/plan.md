
# План обновления контактов, пароля и подготовки к хостингу Рег.ру

## Обзор задач

1. **Замена номера телефона** на +7 (937) 401-97-38
2. **Замена почты** на domlight@mail.ru
3. **Смена пароля админ панели** на "Qwerty123"
4. **Подготовка для хостинга Рег.ру** (создание .htaccess)
5. **Добавление реальных фото** в разделы "Фасады МДФ" и "Мягкие панели"

---

## Детали реализации

### 1. Замена номера телефона

Файлы для обновления (13 файлов):
- `src/components/Navbar.tsx` - номер в шапке (desktop и mobile)
- `src/components/Footer.tsx` - номер в подвале
- `src/pages/Contacts.tsx` - страница контактов
- `src/pages/services/LdspEgger.tsx` - CTA блок
- `src/pages/cutting/LdspCutting.tsx` - CTA блок
- `src/pages/cutting/LdspEggerCutting.tsx` - CTA блок
- `src/pages/cutting/EdgeBanding.tsx` - CTA блок
- `src/pages/cutting/Drilling.tsx` - CTA блок
- `src/pages/cutting/FurnitureCutting.tsx` - CTA блок
- `src/pages/cutting/MdfCutting.tsx` - CTA блок
- `src/pages/cutting/DspMilling.tsx` - CTA блок

**Изменения:**
- Все `href="tel:..."` заменяются на `tel:+79374019738`
- Все отображаемые номера заменяются на `+7 (937) 401-97-38`

### 2. Замена email адреса

Файлы для обновления:
- `src/components/Navbar.tsx` - email в мобильном меню
- `src/components/Footer.tsx` - email в подвале
- `src/pages/Contacts.tsx` - страница контактов
- `src/pages/cutting/LdspCutting.tsx` - убрать `zakaz@prostomebel.org`

**Изменения:**
- Все `info@domlight.ru` заменяются на `domlight@mail.ru`
- Все `mailto:` ссылки обновляются соответственно
- Убирается устаревший email `zakaz@prostomebel.org`

### 3. Изменение пароля админ панели

Файл: `src/pages/Admin.tsx` (строка 86)

**Изменение:**
```javascript
// Было:
if (password === "admin123")

// Станет:
if (password === "Qwerty123")
```

### 4. Подготовка для хостинга Рег.ру

**Проблема:** Рег.ру использует Apache сервер, которому нужен `.htaccess` файл для корректной работы SPA (Single Page Application). Без него при обновлении страницы или прямом переходе по URL сервер возвращает 404 ошибку.

**Решение:** Создать файл `public/.htaccess` с правилами перенаправления:

```text
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

Этот файл автоматически скопируется в папку `dist` при сборке.

**Инструкция по размещению на Рег.ру:**
1. Выполнить `npm run build` локально
2. Загрузить содержимое папки `dist` в корневую директорию сайта (`public_html` или `www`)
3. Убедиться, что `.htaccess` загружен
4. Включить mod_rewrite в панели управления хостингом (если отключен)

### 5. Добавление реальных фото в разделы материалов

#### 5.1. Страница "Фасады МДФ" (`src/pages/services/MdfFacades.tsx`)

Обновить массив `facadeModels` - добавить поле `image` для каждой модели с реальным фото:

```javascript
const facadeModels = [
  { name: "Тиволи", category: "Стандартные NEW", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400" },
  { name: "Арден", category: "Стандартные NEW", image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400" },
  { name: "Борго", category: "Стандартные", image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=400" },
  { name: "Крамон", category: "Стандартные", image: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=400" },
  // ... и остальные модели
];
```

Обновить отображение карточек - заменить иконку `Package` на `<img>` с реальным фото фасада.

#### 5.2. Страница "Мягкие панели" (`src/pages/services/SoftPanels.tsx`)

Обновить массив `fabricCollections` - добавить поле `image` для каждой ткани:

```javascript
const fabricCollections = [
  { name: "Уно", type: "рогожка", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300" },
  { name: "Тедди", type: "велюр", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300" },
  { name: "Марвел", type: "кожзам", image: "https://images.unsplash.com/photo-1553531580-652231f31a16?w=300" },
  // ... и остальные ткани
];
```

Обновить блок "Варианты тканей" - отобразить фото ткани с названием внизу.

---

## Список изменяемых файлов

| Файл | Изменения |
|------|-----------|
| `src/components/Navbar.tsx` | Телефон, email |
| `src/components/Footer.tsx` | Телефон, email |
| `src/pages/Contacts.tsx` | Телефон |
| `src/pages/Admin.tsx` | Пароль |
| `src/pages/services/LdspEgger.tsx` | Телефон |
| `src/pages/cutting/LdspCutting.tsx` | Телефон, email |
| `src/pages/cutting/LdspEggerCutting.tsx` | Телефон |
| `src/pages/cutting/EdgeBanding.tsx` | Телефон |
| `src/pages/cutting/Drilling.tsx` | Телефон |
| `src/pages/cutting/FurnitureCutting.tsx` | Телефон |
| `src/pages/cutting/MdfCutting.tsx` | Телефон |
| `src/pages/cutting/DspMilling.tsx` | Телефон |
| `src/pages/services/MdfFacades.tsx` | Фото моделей фасадов |
| `src/pages/services/SoftPanels.tsx` | Фото тканей |
| `public/.htaccess` | **Новый файл** для Рег.ру |

---

## Технические детали для хостинга Рег.ру

### Почему сайт не работает на Рег.ру?

Это SPA (одностраничное приложение) на React с клиентской маршрутизацией. Когда пользователь переходит на `/services` или обновляет страницу, сервер Apache ищет физический файл `services/index.html`, которого не существует.

### Решение

Файл `.htaccess` перенаправляет все запросы на `index.html`, а React Router обрабатывает маршрутизацию на клиенте.

### Альтернативный вариант (если .htaccess не поможет)

Если на хостинге используется nginx вместо Apache, потребуется настроить конфигурацию сервера:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

Это настраивается через панель управления Рег.ру или через техподдержку.
