const url = 'http://localhost:3000/submit';
const data = {
  text: 'Пример текста',
  file1: 'Base64-код файла 1',
  file2: 'Base64-код файла 2'
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error('Ошибка:', error));

/*
В этом коде submitRouter.post('/submit', ...) обрабатывает POST-запрос на маршруте /submit 
и проверяет наличие трех полей и их содержимое, возвращая соответствующий JSON-ответ. Нужно
заменить значения в объекте data на реальные данные, которые хотим отправить, чтобы убедиться,
что сервер запущен и доступен на указанном адресе.
Чтобы использовать этот код в своем проекте, в основном файле (зд. app.ts) импортируйте и 
запустите код:

import './submitRequest';
// Ваш остальной код приложения

В данном задании код использовался исключительно для проверки - отправки POST-запроса из 
браузера с использованием консоли.
*/
