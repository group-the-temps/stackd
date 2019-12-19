SELECT q.*, u.display_name, u.cohort, u.bio FROM questions AS q
INNER JOIN users AS u ON u.user_id = q.user_id
WHERE tags ILIKE ANY($1)
ORDER BY likes_count DESC;