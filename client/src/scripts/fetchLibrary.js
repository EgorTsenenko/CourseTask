async function fetchLibrary() {
  const response = await fetch("http://localhost:3000/api/library", {
    method: "GET",
    mode: 'cors',
    headers: {
      "Content-Type": "application/json"
    }
  }).then((response) => {
    return response.json()
  })
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.log(error)
    })
}