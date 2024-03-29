## Text Similarity App

Этот проект представляет собой серверное приложение, способное обрабатывать текстовые данные и вычислять их сходство.

### Инструкции по установке и запуску

1. **Установка зависимостей:**

   В корневой папке проекта выполните команду:

   ```bash
   npm install

2. **Запуск сервера:**

После установки зависимостей запустите сервер с помощью команды:
```bash
npm start
```
Сервер будет запущен по адресу http://localhost:3000.

Можете использовать curl, Postman, или любой другой инструмент для выполнения запросов к серверу.
**Пример запроса:**
```
curl -X POST -H "Content-Type: application/json" -d '{"text": "Пример текста", "file1": "Base64-код файла 1", "file2": "Base64-код файла 2"}' http://localhost:3000/submit
```

  
### API Реализованных Функций
1. **Отправка текстовых данных для сравнения**
   
URL: `/submit`

Метод: `POST`

Пример запроса:
```
{
  "text": "Пример текста",
  "file1": "Base64-код файла 1",
  "file2": "Base64-код файла 2"
}

```
Пример ответа:

```
{
  "result": {
    "similarity": 0.85,
    "metric": "Косинусное сходство"
  },
  "message": "Сходство (расстояние) Косинусное сходство равно 0.85"
}
```
2. **Скачивание результата сравнения**
   
URL: `/download`

Метод: `GET`

Отправьте GET-запрос на этот URL, чтобы скачать текстовый файл с результатами сравнения. Файл будет назван "Ответ на запрос.txt".

  
  
**Лицензия**

Этот проект лицензирован в соответствии с [Лицензией MIT](LICENSE).