SELECT * FROM likes
WHERE question_id IS null AND answer_id = $1 AND user_id = $2;