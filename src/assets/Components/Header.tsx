import "./Header.css"
import logo from "./Simple Black Beige Men Style Typography Fashion Logo.png"
import lupa from "./lupa.svg"
import { Link } from "react-router-dom";
    
function Header(){
    return(
    <div className='header'>
        <img src={logo} className='lg'/>
        <li className='list1'>
          <p className='hb1'>P.inicial</p>
          <p className='hb1'>Gêneros</p>
          <Link to="/movies" className='hb1'>Filmes</Link>
        </li>
        <div className='ps1'>
            <input className='ps1i' type="text" placeholder='             oque você esta procurando?' />
            <button className='ps1b'><img className='ps1f' src={lupa}/></button>
        </div>
    </div>
    )
}

export default Header