SELECT * FROM student WHERE id = 1;
SET @std = 0;
SELECT NAME INTO @std FROM student
WHERE id = 1;

SELECT @std;

DELIMITER $
CREATE PROCEDURE select_std()
BEGIN
	SELECT * FROM student;
END $



SHOW PROCEDURE STATUS WHERE Db = "learning";

CALL select_std();

DELIMITER $
CREATE PROCEDURE getCount(OUT c_ount INT)
BEGIN
	SELECT COUNT(*) INTO c_ount FROM student;
END$

DELIMITER ;

SET @total = 0;
CALL getCount(@total);
SELECT @total;

