import express, { Request, Response, Router } from 'express';

const indexRouter = Router();

// Обработчик для GET-запроса на маршрут "/"
indexRouter.get('/', (req: Request, res: Response) => {
    // Рендерим страницу с формой
    res.render('index', { error: undefined });
});

export default indexRouter;
