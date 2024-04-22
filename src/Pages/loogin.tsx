import "./loogin.css"
import MyButton from "../assets/Components/MyButton";
import MyInput from "../assets/Components/MyInput";
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Loogin() {

    const [user, setUser]= useState("");
    const [password, setPassword]= useState("");
    const [loginFail, setLoginFail]= useState(false);

    const navigate= useNavigate();

    const handleUserOnChange= (e: ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value)
    }

    const handlePasswordOnChange= (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleOnClick= () =>{
        if(user === "fox" && password === "555"){
            navigate("/home");
        }else{
            setLoginFail(true);
            setUser('');
            alert("Usuário ou senha incorreto!");
            setPassword('');
            setLoginFail(false);
        }    
    }


    return(

    <>
    <div className="acess">
        <div className='l2'>
        <h2 className="at1">Faça seu Login para Acessar ao Site</h2>
       <MyInput type='text' placeholder='Faça seu Login' bgcolor='white'  onChange={handleUserOnChange} value={loginFail? "..." : user} />
        
        <MyInput type='password' placeholder='Coloque sua senha' bgcolor='white' onChange={handlePasswordOnChange} value={loginFail? "..." : password}/>
        
        </div>
        <MyButton onClick={handleOnClick}>OK</MyButton>

    </div>
    </>
    )
}

export default Loogin