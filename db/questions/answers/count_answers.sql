SELECT COUNT(a.*), q.question_id FROM questions AS q
INNER JOIN answers AS a ON q.question_id = a.question_id
GROUP BY q.question_id
-- WHERE q.question_id = $1;