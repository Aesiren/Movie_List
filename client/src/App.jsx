import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const movies = [
    { title: 'Mean Girls' },
    { title: 'Hackers' },
    { title: 'The Grey' },
    { title: 'Sunshine' },
    { title: 'Ex Machina' },
  ]


  return (
    <>
      <ul>
        {movies.map((movie, key) => {
          return (<li>{movie.title}</li>)
        })}
      </ul>

    </>
  )
}

export default App
