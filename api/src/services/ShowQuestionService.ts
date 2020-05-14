import { injectable, inject } from 'tsyringe';

import Question from '../models/Question';
import IQuestionRepository from '../repositories/IQuestionRepository';

interface IRequest {
  id: string;
}

@injectable()
class CreateQuestionService {
  constructor(
    @inject('QuestionsRepository')
    private questionsRepository: IQuestionRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Question | undefined> {
    const question = await this.questionsRepository.findOneById(id);

    return question;
  }
}
export default CreateQuestionService;
