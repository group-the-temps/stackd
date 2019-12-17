INSERT INTO questions (user_id, question_title, question_desc, tags, time_stamp, likes_count)
VALUES($1, $2, $3, $4, current_timestamp, 0); 