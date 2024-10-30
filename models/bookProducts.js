const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: [true, "must provide author name"],
  },
  genre: {
    type: String,
    enum: {
      values: [
        "Fiction",
        "Dystopian",
        "Historical Fiction",
        "Epic Poetry",
        "Philosophical Fiction",
        "Dystopian",
        "Fantasy",
        "Adventure",
        "Satire",
        "Young Adult",
        "Post-Apocalyptic",
      ],
      message: `Entered data is not Valid`,
    },
  },
  publishedYear: {
    type: Number,
    default: 1986,
  },
  ISBN: {
    type: String,
    default: "9780451524935AFT",
  },
});

module.exports = mongoose.model("Book", bookSchema);
