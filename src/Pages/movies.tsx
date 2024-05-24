import "./movies.css";
import VDV from "../assets/filmComp/VDV";
import Header from "../assets/Components/Header";
import AsB from "../assets/filmComp/AsB";
import IdM from "../assets/filmComp/IdM";
import Avngrs from "../assets/filmComp/Avngrs";
import IRLND from "../assets/filmComp/IRLND";
import MARIO from "../assets/filmComp/MARIO";
import OPt from "../assets/filmComp/OP";
import OPh from "../assets/filmComp/Openheimer";
import SRs from "../assets/filmComp/SR";
import Footer from "../assets/Components/Footer";
import VelozesEF4 from "../assets/filmComp/VelozesEF4";
import VelozesEF5 from "../assets/filmComp/VelozesEF5";
import VelozesEF6 from "../assets/filmComp/VelozesEF6";
import VelozesEF7 from "../assets/filmComp/VelozesEF7";
import VelozesEF8 from "../assets/filmComp/VelozesEF8";
import VelozesEF9 from "../assets/filmComp/VelozesEF9";
import VelozesEF10page from "../assets/FilmPages/VelozesEF10page";
import SenhorDosADTpage from "../assets/FilmPages/SenhorDosADTpage";
import StarWars1page from "../assets/FilmPages/StarWars1page";
import Shrek2page from "../assets/FilmPages/Shrek2page";
import PulpFict from "../assets/filmComp/PulpFict";
import IndianaJonesARD from "../assets/filmComp/IndianaJonesARD";
import DeVoltaPF from "../assets/filmComp/DeVoltaPF";
import Seven from "../assets/filmComp/IndianaJonesRCC";
import ClubeDaLuta from "../assets/filmComp/ClubeDaLuta";
import BrilhoEDSL from "../assets/filmComp/BrilhoEDSL";

function movies(){
    return(

        <>
        <div className="PMm">
            <div className="PMheader">
        <Header/>
            </div>
        <div className="PMcont">
           <VDV/>
           <AsB/>
           <IdM/>
           <Avngrs/>
           <IRLND/>
           <MARIO/>
           <OPt/>
           <OPh/>
           <SRs/>
           <VelozesEF4/>
           <BrilhoEDSL/>
           <StarWars1page/>
           <VelozesEF7/>
           <Shrek2page/>
           <PulpFict/>
           <SenhorDosADTpage/>
           <IndianaJonesARD/>
           <DeVoltaPF/>
           <Seven/>
           <ClubeDaLuta/>
        </div>

        <div className="PMpP">
            <p>Paginas: <a href="/movies">1</a>,<a href="/movies-2">2</a>,<a href="/movies-3">3</a>...</p>
        </div>
        
        <div className="PMfooter">
            <Footer/>
        </div>
        </div>
        </>

    )
}

export default movies