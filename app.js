

const express = require("express");
const app = express();

app.use(express.json());

// DB connection
const db = require("./database/connection");

app.get("/books", (req, res) => {
  res.json({ message: "books fetched successfully" });
});

app.post("/books", (req, res) => {
  res.json({ message: "book added successfully" });
});

app.delete("/books/:id", (req, res) => {
  res.json({ message: "Book deleted successfully" });
});

app.patch("/books/:id", (req, res) => {
  res.json({ message: "Book updated successfully" });
});

app.listen(4900, () => {
  console.log("project/server/backend has started at port 4900");
});
