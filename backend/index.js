import env from "dotenv";
import express from "express";
import mongoose from "mongoose";
const app = express();
env.config();
mongoose
  .connect(process.env.mongo)
  .then(console.log(`Mongodb connected`))
  .catch((err) => console.log("failed database connection" + err));

app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server running port ${PORT}`);
});
