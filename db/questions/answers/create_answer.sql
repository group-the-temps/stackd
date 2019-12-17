INSERT INTO answers (question_id, user_id, answer_desc, time_stamp, likes_count)
VALUES ($1, $2, $3, current_timestamp, 0);