//import { useState } from 'react'
import './App.css'
import NameApp from './components/NameApp'
import CardsMovies from './components/CardsMovies'


function App() {
  return (
    <>
    <NameApp/>
      <CardsMovies 
      movieName= {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCa-CPbThJAIvPSKIedMbmoz-eCWbbXqrfyQ&usqp=CAU'}
      title ={'Black Swan'}/>
      <CardsMovies
      movieName = {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ZvN3m7cgivXW6XA5pR_bggczYE-UELpcdA&usqp=CAU'}
      title = {'Shrek'}/>
      <CardsMovies
      movieName = {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_bI5lf9ADhQ-va4IToO76s08nbxJpNcaHsg&usqp=CAU'}
      title = {'Star Wars'}
      
    />
    </>
  )
}

export default App
