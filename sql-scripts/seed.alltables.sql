BEGIN;

-- INSERT INTO Users
--  (username, password)

-- VALUES
-- ('aDgkel', '12546'),
-- ('fsljl', '55445'),
-- ('einvds','5fdsl');

-- INSERT INTO Daily_Activities
-- (medicine, hours_slept, food, sugar_intake, rate_focus, rate_happiness, rate_energy)
-- VALUES
-- ('adderall', 8, 'breakfast', 9, 1, 4, 3),
-- ('adderall', 2, 'dinner', 4, 3, 2, 3),
-- ('vyvanse', 5, 'breakfast', 3, 2, 5, 3),
-- ('vyvanse', 5, 'breakfast', 3, 2, 5, 3);

INSERT INTO Journal_Entry
(title, content, mood)

VALUES
('today', 'String of text to represent content', 'happy'),
('things', 'String of text to represent content', 'sad'),
('goals', 'String of text to represent content', 'angry'),
('motivation', 'String of text to represent content', 'excited'),
('letting go', 'String of text to represent content', 'sad');

COMMIT;