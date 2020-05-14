import { getRepository, Repository } from 'typeorm';

import IAnswersRepository from './IAnswersRepository';
import ICreateAnswerDTO from './dtos/ICreateAnswerDTO';

import Answer from '../models/Answer';

class QuestionsRepository implements IAnswersRepository {
  private ormRepository: Repository<Answer>;

  constructor() {
    this.ormRepository = getRepository(Answer);
  }

  public async create({
    text,
    user,
    question_id,
  }: ICreateAnswerDTO): Promise<Answer | undefined> {
    const question = this.ormRepository.create({ text, user, question_id });

    await this.ormRepository.save(question);

    return question;
  }
}

export default QuestionsRepository;
