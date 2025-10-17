// Подключаем Express
import express from "express";

// Создаём приложение
const app = express();

// Порт
const PORT = 2754;

// Маршрут для главной страницы
app.get("/", (req, res) => {
  res.send("Sergei");
});

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
