import "./loogin.css"
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import eye   from  "../assets/imgs/visibility_24dp_FILL0_wght400_GRAD0_opsz24.svg"


export interface Loogin{
  id:number;
  nome: string;
  email:string;
  senha:string;
}

function Loogin() {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState("");
    const [userEmail,setUserEmail] = useState("");
    const [userKey, setUserKey] = useState("");
    const [selectedId, setSelectedId] = useState(-1);

  const navigate = useNavigate();

  const handleUserOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  }

  const handlePasswordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleOnclick = () => {
    axios.get(`http://localhost:8080/loogin?nome=${user}`)
      .then((res) => {

        const usr = res.data[0].nome;
        const pass = res.data[0].senha;

        if(user === usr && password === pass){
            
            navigate("/home");
        }else{
            setUser("");
            setPassword("");
            alert("usuario ou senha errados")
        }
      }).catch((err) => {
        alert(err);
      })
  }

  const handleAddOrUpdateUser = async () => {
    if (selectedId < 0) {
      await axios.post("http://localhost:8080/loogin", {
        nome: userName,
        email: userEmail,
        senha: userKey
      });

      alert(`${userName} Registrado com sucesso com sucesso`);

     

      setUserName("");

    } else {
      alert("Falha ao registar");

      setUserName("");
      setPassword("");
      setUserKey("");
      setSelectedId(-1);
    }
  };

  const handleOnInputName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const handleOnInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };
  const handleOnInputkey = (e: ChangeEvent<HTMLInputElement>) => {
    setUserKey(e.target.value);
  };

  const [visibility, setVisibility] = useState<string>("password")
  const handleVisibility = () => {
    if(visibility === "password"){
      setVisibility("text")
    }else{
      setVisibility("password")
    }
  }

    return(

    <>
    <div className="FAcess">

      <div className="acess">

          <div className='l2'>

          <h2 className="at1">Faça seu Login para Acessar ao Site</h2>

          <div className="InpA"><input onChange={handleUserOnchange} type="text" name="username" placeholder="Usuário" /></div>

          <div className="InpA"><input onChange={handlePasswordOnChange} type="password" name="password" placeholder="Senha" /></div>
          
          </div>

         <input onClick={handleOnclick} type="submit" value="Entrar" className="btnent"/>

      </div>

      <div className="divisao"><div className="divisao2"></div></div>

      <div className="cadass">
          
            <h2 className="at2">Cadastre-se Aqui</h2>

            <div className="cadass2">
            <div className="InpC1"><input type="text" placeholder="Novo Usuário: nome" onChange={handleOnInputName} className='ipt'
            value={userName.length > 0 ? userName : ""}/></div>

            <div className="InpC2"><input type="text" placeholder="Informe Seu Email" onChange={handleOnInputEmail} className='ipt'
            value={userEmail.length > 0 ? userEmail : ""} /></div>

            <div className="InpC3"><input type={visibility} placeholder="Insira sua Senha" onChange={handleOnInputkey} className='ipt'
            value={userKey.length > 0 ? userKey : ""} /></div>
            
              <span className="eyedress" onClick={handleVisibility}><img src={eye} alt="" /></span>
              </div>


            <div className="btncass2"><input onClick={handleAddOrUpdateUser} type="submit" value="Cadastre-se" className="btncass"/></div>
            

          </div>
          
      </div>
    </>
    )
}

export default Loogin