import express from "express";
import dotenv from "dotenv";

import { db } from "./config/db.js";
dotenv.config();

import bookrouter from "./routes/book.route.js";
const app = express();

app.use(express.json());
db();

app.use("/api", bookrouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
