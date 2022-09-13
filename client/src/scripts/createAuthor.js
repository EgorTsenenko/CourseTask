async function createAuthor(lastName, firstName, country) {
  const response = await fetch("http://localhost:3000/api/author", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      lastName: lastName,
      firstName: firstName,
      country: country
    })
  })
  console.log(response);
}