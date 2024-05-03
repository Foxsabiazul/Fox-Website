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
                <a href="/terror">Terror <li> 
                  <Link to="/horror" className="pog"></Link></li></a>               
                <a>Ação</a>
                <a>Comédia</a>
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