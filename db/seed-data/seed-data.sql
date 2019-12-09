/* INSERTS */
INSERT INTO users (
    email, 
    password, 
    display_name
    )
VALUES (
    'student@gmail.com', 'studentpass', 'student1'
    )
RETURNING *;

INSERT INTO users (
    email, 
    password, 
    display_name, 
    is_admin
    )
VALUES(
    'admin@gmail.com', 'adminpass', 'admin1', true
    )
RETURNING *;





/* UPDATES/EDITS */
UPDATE users
SET
display_name,
bio,
img
WHERE user_id = 1;