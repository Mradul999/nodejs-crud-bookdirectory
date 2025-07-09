import Book from "../models/book.model.js";

export const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});

    if (allBooks.length == 0) {
      return res.status(200).json({ message: "No book found" });
    }

    res.status(200).json({ message: "Books fetched successfully", allBooks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Errror fetching books", error });
  }
};

export const addBook = async (req, res) => {
  try {
    const { title, author, genre, publishedYear } = req.body;

    if (!title || !author || !genre || !publishedYear) {
      return res.status(400).json({
        message: "Either title or author or genre or published year is missing",
      });
    }

    const existingBook = await Book.findOne({ title });

    console.log(existingBook);

    if (existingBook) {
      return res
        .status(401)
        .json({ message: "Book with this title already added" });
    }

    const newBook = new Book({
      title,
      author,
      genre,
      publishedYear,
    });

    await newBook.save();
    res.status(200).json({ message: "book added successfully", newBook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding book", error });
  }
};

export const modifyBook = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const updates = req.body;
    // console.log(updates);

    const updatedBook = await Book.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book updated successfully", updatedBook });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating the book", error });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book deleted successfully", deletedBook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "error deleting book", error });
  }
};
