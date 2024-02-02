import { Router, Request, Response } from 'express';
import { calculateCosineSimilarity } from '../utils/compareTexts';
import fs from 'fs';

const downloadRouter = Router();

downloadRouter.post('/', (req: Request, res: Response) => {
    if (!req.is('application/json')) {
        return res.status(400).json({ error: 'Ожидался JSON-формат запроса.' });
    }

    const requestBody = req.body;
    const { text: textField, file1, file2 } = requestBody;

    if (!textField || !file1 || !file2) {
        return res.status(400).json({ error: 'Все поля формы должны быть заполнены.' });
    }

    // Логика для расчета сходства
    const similarity = calculateCosineSimilarity(file1, file2);

    // Создаем текстовый файл с результатами
    const resultText = `Для запроса ${textField} сходство (расстояние) вашей метрики равно ${similarity}`;
    const filePath = 'response.txt';

    fs.writeFileSync(filePath, resultText);

    // Отправляем файл для скачивания
    res.download(filePath, 'Ответ на запрос.txt', (err) => {
        // Удаляем файл после отправки
        if (err) {
            console.error('Ошибка при отправке файла:', err);
        } else {
            fs.unlinkSync(filePath);
        }
    });
});

export default downloadRouter;