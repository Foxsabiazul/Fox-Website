import { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./VDVpage.css";
import arch from "../imgs/archive.jpeg";
import axios from "axios";
import Footer from "../Components/Footer";
import PFCfoto from "../imgs/user.svg";

export interface User{
    id: number;
    nome: string;
    comentario: string;
  }

  

function VDVpage(){

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
                <div className="PFposter"><img className="PFposter2" src={arch}/></div>
                    <div className="PFcont2">
                <div className="PFtitulo"><p className="PFtitulo2">O Protótipo</p></div>
                <div className="PFdescricao"><p className="PFdescricao2">George Almor (Theo James) se dedica integralmente ao desenvolvimento de uma IA sofisticada. Seu desejo é produzir uma androide similar à sua esposa falecida (Stacy Martin), com memórias implantadas e sentimentos. Com a versão final pronta, rapidamente a situação sai do controle. Almor agora precisará lidar com a consciência dos protótipos criados por ele e as frustrações que impedem sua reconexão com a amada.</p>
                </div>
                </div>
                </div>
                <div className="PFcont3">
                <div className="PFgeneros">
                    <p className="PFgeneros2">Generos</p>
                    
                    <a href="" target="_blank">Ficção Científica</a>
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

export default VDVpage