create database login
default character set utf8
default collate utf8_general_ci;

create table if not exists users(
id int NOT NULL AUTO_INCREMENT,
nome varchar(100) NOT NULL,
senha varchar(30) NOT NULL,
email varchar(100) NOT NUll,
date_of_birth date NOT NULL,
PRIMARY KEY(id)
)default charset = utf8mb4;

desc users;
SELECT * FROM users;
SET SQL_SAFE_UPDATES=1;
delete from users;

insert into users (id, nome, senha, email , date_of_birth)
values 
(default, 'Anee', '1972-22', 'aaaeeaa@gmail.com', '2003/11/18');


