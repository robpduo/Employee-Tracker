INSERT INTO department (name)
VALUES 
    ('GAMES'),
    ('MUSIC'),
    ('SOCIAL MEDIA');

INSERT INTO role (title, salary, department_id) 
VALUES
    ('GAMER', 36000, 1),
    ('DESIGNER', 48000, 1),
    ('MANAGER', 60000, 1),
    ('VOCALIST', 45000, 2),
    ('COACH', 55000, 2),
    ('TWEETER', 36000, 3),
    ('INSTAGRANNY', 36000, 3),
    ('ADMIN', 45000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Toto', 'Morkie', 1, 1);