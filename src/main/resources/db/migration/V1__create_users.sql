CREATE TABLE user (
    id INT AUTO_INCREMENT,
    username VARCHAR(255),
    password VARCHAR(255)
);

INSERT INTO user (username, password) VALUES ('admin', 'admin');
INSERT INTO user (username, password) VALUES ('user', 'user');
INSERT INTO user (username, password) VALUES ('manager', 'manager');