SELECT display_name, img, cohort, bio
FROM users
WHERE user_id = $1;