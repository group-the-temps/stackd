UPDATE questions
SET likes_count = likes_count + 1
WHERE question_id = $1;

SELECT likes_count FROM questions
WHERE question_id = $1;