-- create dtabase called perntodo
CREATE DATABASE perntodo;

-- create table for todos and specify the schema and data types
CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY, 
  description VARCHAR(255)
)
