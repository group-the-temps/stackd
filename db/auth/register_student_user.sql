INSERT INTO users (email, password, display_name, img, is_admin)
VALUES ($1, $2, $3, $4, false)
RETURNING *;