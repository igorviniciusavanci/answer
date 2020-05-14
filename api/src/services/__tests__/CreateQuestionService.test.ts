import FakeQuestionsRepository from '../../repositories/fakes/FakeQuestionsRepository';
import CreateQuestionService from '../CreateQuestionService';

describe('CreateQuestion', () => {
  it('should be able to create a new question', async () => {
    const fakeQuestionsRepository = new FakeQuestionsRepository();
    const createQuestion = new CreateQuestionService(fakeQuestionsRepository);

    const question = await createQuestion.execute({ text: '2b||!2b?' });

    expect(question).toHaveProperty('id');
    expect(question).toHaveProperty('text');
    expect(question).toHaveProperty('user');
    expect(question?.text).toBe('2b||!2b?');
  });
});
