SELECT * FROM questions
WHERE tags LIKE ANY($1)
ORDER BY total_vote_count DESC;