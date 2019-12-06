CREATE TABLE users
(
user_id SERIAL PRIMARY KEY,
display_name VARCHAR(50) NOT null,
email TEXT NOT null,
password TEXT NOT null,
img TEXT,
cohort VARCHAR(20),
bio TEXT,
is_admin BOOL,
value_question INT,
value_answer INT,
value_vote INT,
total_questions INT,
total_answers INT,
total_upvotes INT,
total_downvotes INT
)