// Корневой компонент приложения

import Greeting from './pages/Greeting/Greeting'
import Genres from './pages/Genres/Genres'
import Movies from './pages/Movies/Movies'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={ <Greeting /> } />
          <Route path='/list' element={ <Movies /> } />
          <Route path='/genres' element={ <Genres /> } />
        </Routes>
      </>
  )
}

export default App;
