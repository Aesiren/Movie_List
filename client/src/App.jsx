import { useState, useEffect } from 'react'
import { getAll } from "./api/api.js"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [movieList, setMovieList] = useState([]);

  const [searchList, setSearchList] = useState([]);
  const [searchOn, setSearchOn] = useState(false);


  useEffect(() => {
    const movieList = async () => {
      let movies = await getAll();
      setMovieList(movies);
    }
    movieList();

  }, [count])

  function searchMovies(formData) {
    setSearchOn(true);
    let term = formData.get('term');
    console.log(term);

    let search = []
    movieList.filter((movie, key) => {
      let fill = movie.title;
      fill.toLowerCase().includes(term.toLowerCase()) ? search.push(fill) : null;
      console.log(fill.toLowerCase().includes(term.toLowerCase()));
    })

    console.log("Search: ", search);
    setSearchList(search);
    console.log(searchList);
  }

  function cancelSearch() {
    setSearchOn(false);
    setSearchList([]);
  }

  if (searchOn) {
    return (
      <>
        <ul>
          {searchList.map((movie, key) => {
            return (<li>{movie}</li>)
          })}
        </ul>
        <button onClick={() => cancelSearch()}>Cancel</button>
      </>
    )
  }

  else {
    return (
      <>
        <form className="search" action={searchMovies}>
          <input type="text" name="term" />
          <button type="submit">Search</button>
        </form>

        <ul>
          {movieList.map((movie, key) => {
            return (<li>{movie.title}</li>)
          })}
        </ul>


      </>
    )
  }
}

export default App
