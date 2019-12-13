INSERT INTO questions (user_id, question_title, question_desc, tags, time_stamp, up_vote_count, down_vote_count, total_vote_count)
VALUES($1, $2, $3, $4, current_timestamp, 0, 0, 0); 