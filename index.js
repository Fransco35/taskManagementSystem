const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb is Connected"))
  .catch((err) => console.log("err"));

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
