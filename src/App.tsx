import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import MainPage from './Pages/mainPage';
import Loogin from './Pages/loogin';
import Movies from './Pages/movies';
import VDVpage from './assets/FilmPages/VDVpage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Loogin/>}/>
      <Route path='/home' element={<MainPage/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/V-de-Vingança' element={<VDVpage/>}/>
      <Route path='/terror' element={<Movies/>}/>
      <Route path='/ação' element={<Movies/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
