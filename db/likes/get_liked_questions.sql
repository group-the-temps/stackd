SELECT * FROM likes
WHERE answer_id IS null AND question_id = $1 AND user_id = $2