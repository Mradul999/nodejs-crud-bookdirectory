import mongoose from "mongoose";

export const db = async () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("database connected successfully");
    })
    .catch((error) => console.log(error));
};
