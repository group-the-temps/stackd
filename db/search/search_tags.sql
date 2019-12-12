SELECT * FROM questions
WHERE tags = $1
ORDER BY time_stamp ASC;