import { useState, useEffect } from 'react'
import { getAll } from "./api/api.js"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const movieList = async () => {
      let movies = await getAll();
      setMovieList(movies);
    }
    movieList();

  }, [count])

  return (
    <>
      <ul>
        {movieList.map((movie, key) => {
          return (<li>{movie.title}</li>)
        })}
      </ul>

    </>
  )
}

export default App
