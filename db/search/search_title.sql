SELECT * FROM questions
WHERE question_title ILIKE $1
ORDER BY time_stamp ASC;