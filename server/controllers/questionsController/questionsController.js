createQuestion = async (req, res) => {
    const db = req.app.get('db');
    const { question_title, question_desc, tags, time_stamp } = req.body;
    const { user_id } = req.session.user

    const createdQuestion = await db.questions.create_question(user_id, question_title, question_desc, tags, time_stamp);
    res.status(200).json(createdQuestion);
}

module.exports = {
    createQuestion
}