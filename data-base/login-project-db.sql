create database login
default character set utf8
default collate utf8_general_ci;

create table if not exists users(
id int NOT NULL AUTO_INCREMENT,
nome varchar(100) NOT NULL,
senha varchar(512) NOT NULL,
email varchar(100) NOT NUll,
date_of_birth date NOT NULL,
PRIMARY KEY(id)
)default charset = utf8mb4;



