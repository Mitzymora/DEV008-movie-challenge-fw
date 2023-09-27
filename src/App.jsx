
import './App.css'
import FetchMovies from './components/CardsMovies'
import NameApp from './components/NameApp'
import SearchInput from './components/SearchInput'


function App() {
  return (
    <> 
    <container className="containe-page">
    <NameApp/>
    <div className='card-container'>
      < FetchMovies    
    />
    </div>
    </container>
    </>
  )
}

export default App
