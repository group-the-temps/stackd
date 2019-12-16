createQuestion = async (req, res) => {
  const db = req.app.get("db");
  const { question_title, question_desc, tags, time_stamp } = req.body;
  const { user_id } = req.session.user;

  const createdQuestion = await db.questions.create_question(
    user_id,
    question_title,
    question_desc,
    tags,
    time_stamp
  );
  res.status(200).json(createdQuestion);
};

getAllQuestions = async (req, res) => {
  const db = req.app.get("db");
  // const { question_id } = req.body;

  const allQuestions = await db.questions.get_all_questions();
  const countAnswers = await db.questions.answers.count_answers();
  const response = [
    allQuestions,
    countAnswers
  ]
  res.status(200).json(response);
};

viewSelectedQuestion = async (req, res) => {
  const db = req.app.get("db");
  const { question_id } = req.params;

  const selectedQuestion = await db.questions.view_selected_question(
    question_id
  );
  try {
    res.status(200).json(selectedQuestion);
  } catch {
    res.status(401).json("Oops, something went wrong!");
  }
};

getSelectedAnswers = async (req, res) => {
  const db = req.app.get("db");
  const { question_id } = req.params;
  // const { user_id } = req.body;

  const selectedAnswers = await db.questions.answers.get_selected_answers(
    question_id
  );
  try {
    res.status(200).json(selectedAnswers);
  } catch {
    res.status(401).json("Oops, something went wrong!");
  }
};

createAnswer = async (req, res) => {
  const db = req.app.get("db");
  const { question_id } = req.params;
  const { user_id } = req.session.user;
  const { answer_desc } = req.body;

  await db.questions.answers.create_answer(question_id, user_id, answer_desc);
  const createdAnswer = {
    question_id: +question_id,
    user_id,
    answer_desc
  };
  res.status(200).json(createdAnswer);
};

module.exports = {
  createQuestion,
  getAllQuestions,
  viewSelectedQuestion,
  getSelectedAnswers,
  createAnswer
};
