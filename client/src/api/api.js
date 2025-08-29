let addMovie = async (title) => {
  let res = await fetch(`http://localhost:8080/movies/new`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      title: title
    })
  })
    .then((response) => response.json());
  return res;
}

let deleteMovie = async (id) => {
  let res = await fetch(`http://localhost:8080/movies/${id}/delete`, {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      title: title
    })
  })
    .then((response) => response.json());
  return res;
}

let updateMovie = async (id, title) => {
  let res = await fetch(`http://localhost:8080/movies/${id}/update`, {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      title: title
    })
  })
    .then((response) => response.json());
  return res;
}

let getMovie = async (id) => {
  let res = await fetch(`http://localhost:8080/movies/${id}`)
    .then((response) => response.json());
  return res;
}

let getAll = async () => {
  let res = await fetch('http://localhost:8080/movies')
    .then((response) => response.json());
  return res;
}

export { addMovie, deleteMovie, updateMovie, getMovie, getAll };