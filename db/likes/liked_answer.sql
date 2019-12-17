UPDATE answers
SET likes_count = likes_count + 1
WHERE answer_id = $1;

SELECT likes_count FROM answers
WHERE answer_id = $1;