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
);

CREATE TABLE questions
(
question_id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(user_id),
question_title VARCHAR(300) NOT null,
question_desc TEXT NOT null,
tags TEXT NOT null,
likes_count INT,
time_stamp TEXT NOT null
);

CREATE TABLE answers
(
answer_id SERIAL PRIMARY KEY,
question_id INT REFERENCES questions(question_id),
user_id INT REFERENCES users(user_id),
answer_desc TEXT NOT null,
time_stamp TEXT NOT null,
likes_count INT
);

CREATE TABLE likes 
(
like_id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(user_id),
question_id INT REFERENCES questions(question_id),
answer_id INT REFERENCES answers(answer_id),
is_liked BOOLEAN
);