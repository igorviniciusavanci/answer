import { injectable, inject } from 'tsyringe';
import Chance from 'chance';

import Answer from '../models/Answer';
import IAnswersRepository from '../repositories/IAnswersRepository';

interface IRequest {
  text: string;
  question_id: string;
}

@injectable()
class CreateQuestionService {
  constructor(
    @inject('AnswersRepository')
    private answersRepository: IAnswersRepository,
  ) {}

  public async execute({
    text,
    question_id,
  }: IRequest): Promise<Answer | undefined> {
    const chance = new Chance();

    const question = await this.answersRepository.create({
      text,
      user: chance.first(),
      question_id,
    });

    return question;
  }
}
export default CreateQuestionService;
