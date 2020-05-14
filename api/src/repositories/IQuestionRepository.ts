import Question from '../models/Question';
import ICreateQuestionDTO from './dtos/ICreateQuestionDTO';

export default interface IQuestionRepository {
  create(data: ICreateQuestionDTO): Promise<Question | undefined>;
  findOneById(id: string): Promise<Question | undefined>;
  findAll(): Promise<Question[] | undefined>;
}
