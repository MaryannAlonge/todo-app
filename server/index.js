const express = require("express");
const cors = require("cors")

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

// after this create the database.sql file 