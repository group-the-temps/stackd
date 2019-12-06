INSERT INTO users (email, password, display_name)
VALUES ($1, $2, $3)
RETURNING *;