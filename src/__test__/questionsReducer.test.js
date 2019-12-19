const {createQuestion, getAllQuestions, updateQuestionState, getSelectedQuestion, createAnswer, getSelectedAnswers} = require('../redux/questionsReducer');
describe(`"createQuestion" should return the correct and necessary type`, () => {
    test(`"createQuestion" function should allow a user to ask a question inside of the forum. `, () => {
        expect(createQuestion().type).toBe("CREATE_QUESTION");
    })
});
describe(`"getAllQuestions" should return the correct and necessary type`, () => {
    test(`"getAllQuestions" function should return all questions that have been asked by users inside of the forum.`, () => {
        expect(getAllQuestions().type).toBe("GET_ALL_QUESTIONS");
    })
});
describe(`"updateQuestionState" should return the correct and necessary type`, () => {
    test(`"updateQuestionState" function should update the state for questions when new questions are added.`, () => {
        expect(updateQuestionState().type).toBe("UPDATE_QUESTION_STATE");
    })
});
describe(`"getSelectedQuestion" should return the correct and necessary type`, () => {
    test(`"getSelectedQuestion" function should allow a user to select a single question and view it's description.`, () => {
        expect(getSelectedQuestion().type).toBe("GET_SELECTED_QUESTION");
    })
});
describe(`"getSelectedAnswers" should return the correct and necessary type`, () => {
    test(`"getSelectedAnswers" function should return all answers connected to a single question with that questions page.`, () => {
        expect(getSelectedAnswers().type).toBe("GET_SELECTED_ANSWERS");
    })
});
describe(`"createAnswer" should return the correct and necessary type`, () => {
    test(`"createAnswer" function should allow a user to answer a question.`, () => {
        expect(createAnswer().type).toBe("CREATE_ANSWER");
    })
});