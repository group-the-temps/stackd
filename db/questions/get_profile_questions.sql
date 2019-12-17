SELECT q.*, u.display_name, u.cohort FROM questions AS q
INNER JOIN users AS u ON q.user_id = u.user_id
WHERE u.user_id = $1
ORDER BY time_stamp DESC;