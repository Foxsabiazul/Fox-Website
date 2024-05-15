import "./mainPage.css";
import Footer from '../assets/Components/Footer';
import Header from '../assets/Components/Header';
import Recomends from '../assets/Components/Recomends';
import Sobre from '../assets/Components/sobre';
import Carsel from "../assets/Components/Carrosel";


function MainPage(){
  return(
    <div className='container'>
    <Header/>
    <Carsel/>
    <Recomends/>
    <Sobre/>
    <Footer/>
    </div>
  )
}

export default MainPage