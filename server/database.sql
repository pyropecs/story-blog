CREATE TABLE users(
user_id SERIAL PRIMARY KEY,
username VARCHAR(256) UNIQUE NOT NULL,
email VARCHAR(256) UNIQUE NOT NULL,
password VARCHAR(256) NOT NULL,
token VARCHAR(256) UNIQUE NOT NULL 

)



CREATE TABLE blogs(
 blog_id SERIAL PRIMARY KEY,
 timestamp timestamp default current_timestamp,
 username varchar(256) UNIQUE NOT NULL,
 content varchar(3000) NOT NULL,
 rating float4 NOT NULL
);