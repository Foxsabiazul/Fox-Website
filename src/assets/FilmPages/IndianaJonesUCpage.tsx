import { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./VDVpage.css";
import varse from "../imgs/IJUCp.jpg";
import axios from "axios";
import Footer from "../Components/Footer";
import PFCfoto from "../imgs/user.svg";

export interface User{
    id: number;
    nome: string;
    comentario: string;
  }

  

function IndianaJonesUCpage(){

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        handleGetUsers();
      }, []);
    
      const handleGetUsers = async () => {
        const res = await axios.get("http://localhost:8080/users");
    
        setUsers(res.data);
      };



    return(
        <>  
        <div className="PFm">
                  <div className="PFheader">
            <Header/>
                 </div>
             <div className="PFcont">
                <div className="PFcont1">
                <div className="PFposter"><img className="PFposter2" src={varse}/></div>
                    <div className="PFcont2">
                <div className="PFtitulo"><p className="PFtitulo2">Indiana Jones e a Última Cruzada</p></div>
                <div className="PFdescricao"><p className="PFdescricao2">O arqueólogo Indiana Jones (Harrisson Ford) tem acesso à um misterioso envelope que contém informações sobre a localização do lendário Santo Graal, o cálice que Jesus Cristo teria utilizado na Última Ceia. Quando seu pai, o professor Henry Jones (Sean Connery), é sequestrado pelos nazistas, o aventureiro irá embarcar numa missão perigosa para salvá-lo e impedir que a relíquia sagrada caia em mãos erradas.</p>
                </div>
                </div>
                </div>
                <div className="PFcont3">
                <div className="PFgeneros">
                    <p className="PFgeneros2">Generos</p>
                    <a href="" target="_blank">Ação</a>
                    <a href="" target="_blank">Aventura</a>
                   
                </div>
                <div className="PFplayer">
                    <p>PLayers</p>
                    <div className="PFplayer2">
                    <button className="PFplayerl">Legendado</button>
                    <button className="PFplayerd">Dublado</button>
                    </div>
                </div>
                </div>
             </div>
             <div className="PFcomentario">
             {users.map((user) => (
                <div key={user.id} className='PFcomentario2'>
                  <img className="PFCfoto" src={PFCfoto}/>
                  <div className="PFcomentarios2">
                  <p className='td1' style={{ width: "300px" }}>{user.nome}</p>
                  <p className='td3' style={{ width: "300px" }}>{user.comentario}</p>
                </div>
                </div>
            ))}
            </div>
            <div className="PFfooter">
                <Footer/>
            </div>
        </div>
     </>
)}

export default IndianaJonesUCpage