async function createBook(name, price, authorId) {
  const response = await fetch("http://localhost:3000/api/book", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      price: price,
      authorId: authorId
    })
  })
  console.log(response);
}