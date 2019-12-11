UPDATE users
SET cohort = $1
WHERE user_id = $2
RETURNING *;