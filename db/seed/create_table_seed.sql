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

CREATE TABLE questions
(
question_id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(user_id),
question_title VARCHAR(300) NOT null,
question_desc TEXT NOT null,
tags TEXT NOT null,
up_vote_count INT NOT null,
down_vote_count INT NOT null,
total_vote_count INT NOT null,
time_stamp TEXT NOT null
)