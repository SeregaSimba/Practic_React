import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(json());

const users = []; // тут будут храниться данные от клиентов

app.post("/register", (req, res) => {
  const { name, age, pass } = req.body;
  users.push({ name, age, pass }); // сохраняем данные
  res.json({
    message: "Пользователь зарегистрирован",
    data: { name, age, pass },
  });
});

app.get("/users", (req, res) => {
  res.json(users); // возвращаем всех пользователей
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
