const express = require("express");
const app = express();
const cors = require("cors");

// CORS
app.use(cors(["*"]));

// Body Parser
app.use(express.json());

app.get("", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

// Routers
const moviesRouter = require("./routes/movie.route");

// API
app.use("/api/movies", moviesRouter);

module.exports = app;
