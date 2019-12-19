SELECT q.*, u.display_name, u.cohort, u.bio FROM questions AS q
INNER JOIN users AS u ON q.user_id = u.user_id
ORDER BY time_stamp DESC;