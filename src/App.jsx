// Корневой компонент приложения

import Greeting from './pages/Greeting/Greeting'
import Groups from './pages/Groups'
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
          <Route path='/groups' element={ <Groups /> } />
        </Routes>
      </>
  )
}

export default App;
