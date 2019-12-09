UPDATE users
SET display_name = $1
WHERE user_id = $2
RETURNING *;
