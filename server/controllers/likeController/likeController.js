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

module.exports = {
    likedQuestion,
    boolLikedQuestion,
    likedAnswer,
    boolLikedAnswer
}