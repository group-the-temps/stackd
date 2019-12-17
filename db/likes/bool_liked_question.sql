INSERT INTO likes (user_id, question_id, is_liked)
VALUES ($1, $2, true);

SELECT user_id, question_id, is_liked FROM likes
WHERE user_id = $1 AND question_id = $2