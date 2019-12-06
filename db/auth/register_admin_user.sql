INSERT INTO users (email, password, display_name, is_admin)
VALUES($1, $2, $3, true)
RETURNING *;