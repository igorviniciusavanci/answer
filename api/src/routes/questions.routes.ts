import { Router } from 'express';
import { container } from 'tsyringe';

import CreateQuestionService from '../services/CreateQuestionService';
import ShowQuestionService from '../services/ShowQuestionService';
import ListQuestionService from '../services/ListQuestionService';

const questionsRouter = Router();

questionsRouter.get('/', async (request, response) => {
  try {
    const showQuestion = container.resolve(ListQuestionService);
    const question = await showQuestion.execute();

    return response.json(question);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

questionsRouter.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const showQuestion = container.resolve(ShowQuestionService);
    const question = await showQuestion.execute({ id });

    return response.json(question);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

questionsRouter.post('/', async (request, response) => {
  try {
    const { text } = request.body;

    const createQuestion = container.resolve(CreateQuestionService);

    const question = await createQuestion.execute({ text });

    return response.json(question);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default questionsRouter;
