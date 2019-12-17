SELECT q.*, u.display_name, u.cohort, l.is_liked FROM questions AS q
INNER JOIN users AS u ON q.user_id = u.user_id
INNER JOIN likes AS l ON q.question_id = l.question_id
ORDER BY time_stamp DESC;