SELECT * FROM questions
WHERE tags ILIKE ANY($1)
ORDER BY total_vote_count DESC;