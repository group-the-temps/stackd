SELECT * FROM answers
WHERE questiond_id = $1;

-- SELECT a.*, u.display_name, u.cohort FROM answers AS a
-- INNER JOIN users AS u ON u.user_id = a.user_id
-- WHERE a.question_id = $1 AND u.user_id = $2;