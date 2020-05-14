import { Router } from 'express';
import questionsRouter from './questions.routes';
import answersRouter from './answers.routes';

const routes = Router();

routes.use('/questions', questionsRouter);
routes.use('/answers', answersRouter);

export default routes;
