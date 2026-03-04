# 1. Берем базовый образ с Node.js
FROM node:20-alpine

# 2. Указываем рабочую папку внутри контейнера
WORKDIR /art_app

# 3. Копируем файлы зависимостей
COPY package*.json ./

# 4. Устанавливаем зависимости
RUN npm install

# 5. Копируем весь остальной код
COPY . .

# 6. Собираем проект (компиляция TypeScript в JavaScript)
RUN npm run build

# 7. Открываем порт 3000
EXPOSE 3000

# 8. Команда для запуска приложения
CMD ["npm", "run", "start:prod"]
