likedQuestion = async (req, res) => {
    const db = req.app.get('db');
    const { question_id } = req.params;


    const likedQ = await db.likes.liked_question(question_id);
    res.status(200).json(likedQ)
}

boolLikedQuestion = async (req, res) => {
    const db = req.app.get('db');
    const { user_id, question_id } = req.body;

    const likedQuestionCount = await db.likes.bool_liked_question(user_id, question_id);
    res.status(200).json(likedQuestionCount);
}

getLikedQuestions = async (req, res) => {
    const db = req.app.get('db');
    const { question_id } = req.params;
    const { user_id } = req.session.user;

    const allLikedQuestions = await db.likes.get_liked_questions(question_id, user_id);
    res.status(200).json(allLikedQuestions);
}

likedAnswer = async (req, res) => {
    const db = req.app.get('db');
    const { answer_id } = req.params;

    const likedA = await db.likes.liked_answer(answer_id);
    res.status(200).json(likedA);
}

boolLikedAnswer = async (req, res) => {
    const db = req.app.get('db');
    const { user_id, answer_id } = req.body;

    const likedAnswerCount = await db.likes.bool_liked_answer(user_id, answer_id);
    res.status(200).json(likedAnswerCount)
}

getLikedAnswers = async (req, res) => {
    const db = req.app.get('db');
    const { answer_id } = req.params;
    const { user_id } = req.session.user;

    const allLikedAnswers = await db.likes.get_liked_answers(answer_id, user_id);
    console.log(answer_id)
    res.status(200).json(allLikedAnswers);
}

module.exports = {
    likedQuestion,
    boolLikedQuestion,
    likedAnswer,
    boolLikedAnswer,
    getLikedQuestions,
    getLikedAnswers
}