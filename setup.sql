CREATE DATABASE IF NOT EXISTS BookReviews;

CREATE USER IF NOT EXISTS 'user'@'localhost' IDENTIFIED BY 'J@9&kz3*P6!wR^7q';
GRANT ALL PRIVILEGES ON BookReviews.* TO 'user'@'localhost';
FLUSH PRIVILEGES;