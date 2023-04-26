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
app.get("/todos", async(req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message)
    
  }
});

// get a todo

app.get("/todos/:id", async(req, res) => {
  try {
    const {id} = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])

    res.json(todo.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})


//edit/update a todo

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {description} = req.body;
    const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", 
    [description, id]
    );

    res.json("Todo was updated!")
  } catch (err) {
    console.error(err.message)
  }
})

//delete a todo

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id])

    res.json("Todo successfully deleted!")
  } catch (err) {
    console.error(err.message)
  }
})