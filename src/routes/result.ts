// src/routes/result.ts
import { Router, Request, Response } from 'express';
import { calculateCosineSimilarity } from '../utils/compareTexts';

const resultRouter = Router();

resultRouter.post('/', (req: Request, res: Response) => {
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

    const jsonResponse = {
        requestText: textField,
        similarity: similarity,
        metric: 'косинусное сходство', // Используемая в данном проекте
    };

    res.json(jsonResponse);
});

export default resultRouter;
