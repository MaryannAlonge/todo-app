const express = require("express");
const cors = require("cors");
const pool = require("./db");

// run the express libary using app
const app = express();

app.listen(5000, () => {
  console.log("server running on port 5000")
}); //test by running node index on terminal

// install nodemon to watch your file instead of node(so run nodemon index after install)


// create middlware(anytime we need to create a middlware we use app.use)
app.use(cors());

// we must handle data from the client side using express.json(this gives us access to request.body)
app.use(express.json());

// after this create the database.sql file (go into file)


// then define the ROUTES

// create a todo
app.post("/todos", async(req, res) => {
 try {
  // sanity check with console log first
  console.log(req.body)

  // destructure req.body
  const {description} = req.body;

  // define a new variable and query the db
 const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING * ", 
 [description]
 );
 
 res.json(newTodo.rows[0])
 } catch (err) {
  console.error(err.message);
 }
});

// get all todos

// get a todo

//edit/update a todo

//delete a todo