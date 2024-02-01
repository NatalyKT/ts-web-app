import { Router, Request, Response } from 'express';

// Создаем Router для /api
const apiRouter = Router();

// Обработчик для GET-запроса по маршруту /api
apiRouter.get('/', (req: Request, res: Response) => {
    // Возвращаем JSON при GET-запросе на /api
    res.json({
        help: 'Отправьте запрос с данными. Файлы кодируйте в Base64.',
        example: {
            text: 'Текстовая строка',
            file1: '0KHQvtC00LXRgNC20LjQvNC+0LUg0L/QtdGA0LLQvtCz0L4g0YTQsNC50LvQsC4=',
            file2: '0KHQvtC00LXRgNC20LjQvNC+0LUg0LLRgtC+0YDQvtCz0L4g0YTQsNC50LvQsC4='
        }
    });
});

export default apiRouter;