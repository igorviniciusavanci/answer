import Answer from '../models/Answer';
import ICreateAnswerDTO from './dtos/ICreateAnswerDTO';

export default interface IAnswersRepository {
  create(data: ICreateAnswerDTO): Promise<Answer | undefined>;
}
