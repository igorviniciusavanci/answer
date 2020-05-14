import { injectable, inject } from 'tsyringe';

import Question from '../models/Question';
import IQuestionRepository from '../repositories/IQuestionRepository';

@injectable()
class ListQuestionService {
  constructor(
    @inject('QuestionsRepository')
    private questionsRepository: IQuestionRepository,
  ) {}

  public async execute(): Promise<Question[] | undefined> {
    const question = await this.questionsRepository.findAll();

    return question;
  }
}
export default ListQuestionService;
