import { injectable, inject } from 'tsyringe';
import Chance from 'chance';

import Question from '../models/Question';
import IQuestionRepository from '../repositories/IQuestionRepository';

interface IRequest {
  text: string;
}

@injectable()
class CreateQuestionService {
  constructor(
    @inject('QuestionsRepository')
    private questionsRepository: IQuestionRepository,
  ) {}

  public async execute({ text }: IRequest): Promise<Question | undefined> {
    const chance = new Chance();

    const question = await this.questionsRepository.create({
      text,
      user: chance.first(),
    });

    return question;
  }
}
export default CreateQuestionService;
