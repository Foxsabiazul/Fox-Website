import "./Header.css"
import logo from "../imgs/Simple Black Beige Men Style Typography Fashion Logo.png"
import lupa from "../imgs/pipoca-para-filmes.png"
import { Link } from "react-router-dom";


    
function Header(){
    return(
    <div className='header'>
        <img src={logo} className='lg'/>
        <li className='list1'>
          <a href="/home"><p className='hb1'>P.inicial</p></a>
          <li className="dropd">
            <a href="">Gêneros</a>
            <div className="dropd-m">

                <a href="/terror" className="horror">Terror <li>
                  <Link to=""></Link></li></a>

                <a href="/ação" className="shots">Ação <li>
                  <Link to=""></Link></li></a>

                <a href="/comédia" className="funny">Comédia <li>
                  <Link to=""></Link></li></a>

                <a href="/policial" className="cops">Policial <li>
                  <Link to=""></Link></li></a>

                <a href="/sci-fi" className="nerd">Ficção Científica <li>
                  <Link to=""></Link></li></a>

                <a href="/suspense" className="suspense">Suspense <li>
                  <Link to=""></Link></li></a>

                <a href="/drama" className="drama">Drama <li>
                  <Link to=""></Link></li></a>

                <a href=""></a>
            </div>
          </li>
          <Link to="/movies" className='hb1'>Filmes</Link>
        </li>
        <div className='ps1'>
            <input className='ps1i' type="text" placeholder='          procurando por diversão?    '></input>
            <button className='ps1b'><img className='ps1f' src={lupa} /></button>
            
        </div>
    </div>
    )
}

export default Header