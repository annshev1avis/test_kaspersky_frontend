// Корневой компонент приложения

import Greeting from './pages/Greeting'
import Groups from './pages/Groups'
import Movies from './pages/Movies'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={ <Greeting /> } />
          <Route path="/list" element={ <Movies /> } />
          <Route path="/groups" element={ <Groups /> } />
        </Routes>
      </>
  )
}

export default App
