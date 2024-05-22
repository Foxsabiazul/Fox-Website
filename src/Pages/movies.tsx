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
import VeloresEF4 from "../assets/filmComp/VeloresEF4";
import VeloresEF5 from "../assets/filmComp/VeloresEF5";
import VelozesEF4 from "../assets/filmComp/VeloresEF4";
import VelozesEF5 from "../assets/filmComp/VeloresEF5";
import VelozesEF6 from "../assets/filmComp/VeloresEF6";
import VelozesEF7 from "../assets/filmComp/VelozesEF7";

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
           <VelozesEF5/>
           <VelozesEF6/>
           <VelozesEF7/>
           <VDV/>
           <VDV/>
           <VDV/>
           <VDV/>
           <VDV/>
           <VDV/>
           <VDV/>
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