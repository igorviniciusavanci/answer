import { uuid } from 'uuidv4';

import IQuestionRepository from '../IQuestionRepository';
import ICreateQuestionDTO from '../dtos/ICreateQuestionDTO';

import Question from '../../models/Question';

class QuestionsRepository implements IQuestionRepository {
  private questions: Question[] = [];

  public async findAll(): Promise<Question[] | undefined> {
    return this.questions;
  }

  public async findOneById(id: string): Promise<Question | undefined> {
    const findQuestion = this.questions.find(question => question.id === id);
    return findQuestion;
  }

  public async create({
    text,
    user,
  }: ICreateQuestionDTO): Promise<Question | undefined> {
    const question = new Question();

    Object.assign(question, { id: uuid(), text, user });

    this.questions.push(question);

    return question;
  }
}

export default QuestionsRepository;
