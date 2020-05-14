import { getRepository, Repository } from 'typeorm';

import IQuestionRepository from './IQuestionRepository';
import ICreateQuestionDTO from './dtos/ICreateQuestionDTO';

import Question from '../models/Question';

class QuestionsRepository implements IQuestionRepository {
  private ormRepository: Repository<Question>;

  constructor() {
    this.ormRepository = getRepository(Question);
  }

  public async findAll(): Promise<Question[] | undefined> {
    const questions = await this.ormRepository.manager
      .createQueryBuilder(Question, 'question')
      .loadRelationCountAndMap('question.answerCount', 'question.answer')
      .orderBy('created_at', 'DESC')
      .getMany();

    return questions;
  }

  public async findOneById(id: string): Promise<Question | undefined> {
    const question = await this.ormRepository.findOne({
      where: { id },
      relations: ['answer'],
    });

    return question;
  }

  public async create({
    text,
    user,
  }: ICreateQuestionDTO): Promise<Question | undefined> {
    const question = this.ormRepository.create({ text, user });

    await this.ormRepository.save(question);

    return question;
  }
}

export default QuestionsRepository;
