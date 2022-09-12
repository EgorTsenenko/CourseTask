async function createAuthor() {
  let lastName = "WWWW"
  const response = await fetch("http://localhost:3000/api/author", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      lastName: lastName,
      firstName: "Author-2",
      country: "Russia"
    })
  })
  console.log(response);
}