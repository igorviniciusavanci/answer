import { container } from 'tsyringe';

import IQuestionRepository from '../repositories/IQuestionRepository';
import QuestionsRepository from '../repositories/QuestionsRepository';

import IAnswersRepository from '../repositories/IAnswersRepository';
import AnswersRepository from '../repositories/AnswersRepository';

container.registerSingleton<IQuestionRepository>(
  'QuestionsRepository',
  QuestionsRepository,
);

container.registerSingleton<IAnswersRepository>(
  'AnswersRepository',
  AnswersRepository,
);
