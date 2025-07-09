import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publishedYear: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("book", BookSchema);

export default Book;
