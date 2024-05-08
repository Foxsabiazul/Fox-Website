import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import MainPage from './Pages/mainPage';
import Loogin from './Pages/loogin';
import Movies from './Pages/movies';
import VDVpage from './assets/FilmPages/VDVpage';
import AsBpage from './assets/FilmPages/AsBpage';
import Avngrspage from './assets/FilmPages/Avngrspage';
import BlandRunpage from './assets/FilmPages/BladRunpage';
import IdMpage from './assets/FilmPages/IdMpage';
import IniPpage from './assets/FilmPages/IniPpage';
import IRLNDpage from './assets/FilmPages/IRLNDpage';
import MARIOpage from './assets/FilmPages/MARIOpage';
import OPpage from './assets/FilmPages/OPpage';
import Openheimerpage from './assets/FilmPages/Openheimerpage';
import SRpage from './assets/FilmPages/SRpage';
import WITCHpage from './assets/FilmPages/WITCHpage';
import Matrixpage from './assets/FilmPages/Matrixpage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Loogin/>}/>
      <Route path='/home' element={<MainPage/>}/>
      <Route path='/movies' element={<Movies/>}/>

      <Route path='/terror' element={<Movies/>}/>
      <Route path='/ação' element={<Movies/>}/>

      <Route path='/As-Branquelas' element={<AsBpage/>}/>
      <Route path='/Vingadores-Guerra-Infinita' element={<Avngrspage/>}/>
      <Route path='/Blade-Runner-2049' element={<BlandRunpage/>}/>
      <Route path='/Ilha-do-Medo' element={<IdMpage/>}/>
      <Route path='/Inimigos-Publicos' element={<IniPpage/>}/>
      <Route path='/O-irlandes' element={<IRLNDpage/>}/>
      <Route path='/Super-Mario' element={<MARIOpage/>}/>
      <Route path='/O-Prototipo' element={<OPpage/>}/>
      <Route path='/Openheimer' element={<Openheimerpage/>}/>
      <Route path='/Sem-Rastros' element={<SRpage/>}/>
      <Route path='/V-de-Vingança' element={<VDVpage/>}/>
      <Route path='/A-Bruxa' element={<WITCHpage/>}/>
      <Route path='/Matrix' element={<Matrixpage/>}/>
     
    </Routes>
   </BrowserRouter>
  )
}

export default App
