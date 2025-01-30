const express = require("express");
const cors = require("cors");


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());


app.get("/", (req, res) => {
  const response = {
    email: "bhigsheydi@gmail.com", 
    current_datetime: new Date().toISOString(), 
    github_url: "https://github.com/bhig-sheydi/hng.git" 
  };

  res.json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
