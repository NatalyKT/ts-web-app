// src/routes/submit.ts
import { Router, Request, Response } from 'express';
import fs from 'fs';
import { calculateCosineSimilarity } from '../utils/compareTexts';

// Тип ответа для успешного запроса
interface SubmitSuccessResponse {
    success: boolean;
    message: string;
    similarity: number;
}

// Тип ответа для запроса с ошибкой
interface SubmitErrorResponse {
    error: string;
}

// Общий тип ответа
type SubmitResponse = SubmitSuccessResponse | SubmitErrorResponse;

// Создаем Router для /submit
const submitRouter = Router();

// Обработчик для GET-запроса по маршруту /submit
submitRouter.get('/', (req: Request, res: Response) => {
    // Рендерим страницу с формой
    res.render('index', { error: undefined });
});

// Обработчик для POST-запроса по маршруту /submit
submitRouter.post('/submit', (req: Request, res: Response) => {
    // Проверяем, что тело запроса является JSON
    if (!req.is('application/json')) {
        return res.status(400).json({ error: 'Ожидался JSON-формат запроса.' });
    }

    // Получаем JSON-объект из тела запроса
    const requestBody = req.body;

    // Проверяем наличие указанных полей в JSON-объекте
    const { text: textField, file1, file2 } = requestBody;

    // Проверка наличия трех полей
    if (!textField || !file1 || !file2) {
        // Если какого-то из полей нет, возвращаем ошибку в JSON
        return res.status(400).json({ error: 'Все поля формы должны быть заполнены.' });
    }

    // Проверяем, являются ли файлы текстовыми
    const isTextFile = (fileContent: string): boolean => {
        // Простая проверка: содержит ли файл только символы ASCII
        return /^[\x20-\x7E]*$/.test(fileContent);
    };

    if (!isTextFile(file1) || !isTextFile(file2)) {
        // Если один из файлов не является текстовым, возвращаем ошибку в JSON
        return res.status(400).json({ error: 'Оба файла должны быть текстовыми.' });
    }

    // Предположим, что file1 и file2 это Base64-кодированные текстовые файлы
    const decodedFile1 = Buffer.from(file1, 'base64').toString('utf-8');
    const decodedFile2 = Buffer.from(file2, 'base64').toString('utf-8');

    // Пример: сохраняем файлы на сервере
    fs.writeFileSync('file1.txt', decodedFile1);
    fs.writeFileSync('file2.txt', decodedFile2);

    // Вычисляем косинусное сходство между текстами файлов
    const similarity = calculateCosineSimilarity(decodedFile1, decodedFile2);

    // Если все проверки пройдены, можно продолжить обработку данных

    // Ваши действия с данными, например, сохранение в базу данных, отправка на сервер и т. д.

    // Готовим ответ для успешного запроса
    const successResponse: SubmitSuccessResponse = {
        success: true,
        message: 'Данные успешно отправлены!',
        similarity: similarity,
    };

    // Отправляем ответ в JSON
    res.json(successResponse);
});

export default submitRouter;
