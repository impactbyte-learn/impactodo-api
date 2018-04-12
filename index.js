const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// -----------------------------------------------------------------------------

const PORT = process.env.PORT || 3000;

let todos = [
  {
    text: "Learn Node.js"
  },
  {
    text: "Learn Express.js"
  }
];

// -----------------------------------------------------------------------------

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// =============================================================================

app.get("/", (req, res) => {
  const response = {
    message: `Please access /todos`
  };

  res.send(response);
});

// -----------------------------------------------------------------------------

app.get("/todos", (req, res) => {
  const response = {
    message: `All todos`,
    data: todos
  };

  res.send(response);
});

// -----------------------------------------------------------------------------

app.get("/todos/:id", (req, res) => {
  const id = req.params.id;

  const response = {
    message: `Todo with specified id`,
    id: id,
    data: todos[id]
  };

  res.send(response);
});

// -----------------------------------------------------------------------------

app.post("/todos", (req, res) => {
  const response = {
    message: `New todo created`,
    data: req.body
  };

  res.send(response);
});

// -----------------------------------------------------------------------------

app.delete("/todos", (req, res) => {
  const response = {
    message: `All todos deleted`
  };

  res.send(response);
});

// -----------------------------------------------------------------------------

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;

  const response = {
    message: `Todo with id ${id} deleted`,
    id: id,
    data: todos[id]
  };

  res.send(response);
});

// -----------------------------------------------------------------------------

app.delete("/todos/:id", (req, res) => {
  const response = {
    message: `Todo with id ${id} updated`,
    id: req.param.id,
    data: todos[id]
  };
  res.send(response);
});

// =============================================================================

app.listen(PORT, () => {
  console.log(`Impact Todo API is listening on :${PORT}`);
});
