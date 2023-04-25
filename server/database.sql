-- create dtabase called perntodo
CREATE DATABASE perntodo;

-- create table for todos and specify the schema and data types
CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY, 
  description VARCHAR(255)
);

--after here, put your commands in the CLI then connect with server in db.js
