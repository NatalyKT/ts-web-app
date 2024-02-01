// src/app.ts
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import apiRouter from './routes/api';
import indexRouter from './routes/index';
import submitRouter from './routes/submit';
import downloadRouter from './routes/download';
import resultRouter from './routes/result';

const app = express();
const PORT = 3000;

// Подключаем middleware для обработки тела запроса в формате JSON
app.use(bodyParser.json());

// Подключаем роутеры
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/submit', submitRouter);
app.use('/download', downloadRouter);
app.use('/result', resultRouter);

// Подключаем шаблонизатор EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу http://localhost:${PORT}`);
});
