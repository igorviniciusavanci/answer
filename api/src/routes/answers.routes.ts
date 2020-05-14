import { Router } from 'express';
import { container } from 'tsyringe';
import CreateAnswerService from '../services/CreateAnswerService';

const answerRouter = Router();

answerRouter.post('/', async (request, response) => {
  try {
    const { text, question_id } = request.body;

    const createAnswer = container.resolve(CreateAnswerService);

    const answer = await createAnswer.execute({ text, question_id });

    return response.json(answer);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default answerRouter;
