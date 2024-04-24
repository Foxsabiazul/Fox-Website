import "./mainPage.css";
import Footer from '../assets/Components/Footer';
import Header from '../assets/Components/Header';
import Recomends from '../assets/Components/Recomends';
import Sobre from '../assets/Components/sobre';
import Movies from './movies';

function MainPage(){
  return(
    <div className='container'>
    <Header/>
    <Recomends/>
    <Sobre/>
    <Footer/>
    <Movies/>
    </div>
  )
}

export default MainPage