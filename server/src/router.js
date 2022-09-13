const { Router } = require("express");
const { Book, Author } = require("./models");

const router = new Router();

router.get("/library", async (req, res) => {
  const response = await Book.findAll({ include: [{ model: Author }] });
  return res.json(response);
});

router.post("/author", async (req, res) => {
  let { lastName, firstName, country } = req.body;
  const author = await Author.create({
    lastName: lastName,
    firstName: firstName,
    country: country,
  });
  return res.json(author);
});

router.post("/book", async (req, res) => {
  const { name, price, authorId } = req.body;
  const book = await Book.create({
    name: name,
    price: price,
    authorId: authorId,
  });
  return res.json(book);
});

module.exports = router;