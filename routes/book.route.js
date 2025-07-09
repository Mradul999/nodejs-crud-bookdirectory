import express from "express";
import {
  addBook,
  deleteBook,
  getAllBooks,
  modifyBook,
} from "../controllers/book.controller.js";

const router = express.Router();

router.get("/getallbooks", getAllBooks);
router.post("/addbook", addBook);
router.put("/editbook/:id", modifyBook);
router.delete("/deletebook/:id",deleteBook)

export default router;
