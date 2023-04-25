const express = require("express")

// run the express libary using app
const app = express();

app.listen(5000, () => {
  console.log("server running on port 5000")
}); //test by running node index on terminal

// install nodemon to watch your file instead of node


// create middlware