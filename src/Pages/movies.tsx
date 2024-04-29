import "./movies.css";
import VDV from "../assets/filmComp/VDV";
import MARIO from "../assets/filmComp/MARIO";
import BLR from "../assets/filmComp/BladRun";
import OPh from "../assets/filmComp/Openheimer";
import OPt from "../assets/filmComp/OP";
import Avngrs from "../assets/filmComp/Avngrs";
import IniP from "../assets/filmComp/IniP";
import IRLND from "../assets/filmComp/IRLND";
import SRs from "../assets/filmComp/SR";
import IdM from "../assets/filmComp/IdM";
import WITCH from "../assets/filmComp/WITCH";

function movies(){
    return(
        <>
        <div className="bd1" content="borderbox">
            <p>Filmes</p>
            <VDV/>
            <BLR/>
            <MARIO/>
            <OPh/>
            <OPt/>
            <Avngrs/>
            <IniP/>
            <IRLND/>
            <SRs/>
            <WITCH/>
            <IdM/>


        </div>
        </>

    )
}

export default movies