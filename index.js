const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb is Connected"))
  .catch((err) => console.log(err.message));

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
});

const Task = mongoose.model("Task", taskSchema);

app.post("/api/addTasks", (req, res) => {
  const status = "Incomplete";

  const { title, description } = req.body;

  const task = new Task({
    title: title,
    description: description,
    status: status,
  });

  Task.create(task)
    .then((result) => {
      res.status(201).json({ message: "Task created successfully" });
    })
    .catch((error) => {
      console.log(error.message);
    });
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
