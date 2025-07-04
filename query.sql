# Create DB
CREATE DATABASE learning;

# Delete DB
DROP DATABASE learning;

# Select DB
USE learning;

# Create Table
CREATE TABLE student(
	id INT PRIMARY KEY AUTO_INCREMENT,
	NAME VARCHAR(100),
	eng INT,
	mat INT
);

# Insert
INSERT INTO student (id, NAME, eng, mat)
VALUES (1,"Arun",100,100);

INSERT INTO student (NAME, eng, mat)
VALUES ("Srikanth", 35, 56), ("Sabri", 34, 60);

# select query
SELECT * FROM student;

SELECT * FROM student
WHERE id = 1;

# update
UPDATE student
SET `name` = "Arun Kumar"
WHERE id = 1; 

# delete
DELETE FROM student
WHERE id = 3;

DELETE FROM student;

# Truncate -- deletes all rows
TRUNCATE student; 

# DROP Table
DROP TABLE student;