import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import MainPage from './Pages/mainPage';
import Loogin from './Pages/loogin';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Loogin/>}/>
      <Route path='/home' element={<MainPage/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
