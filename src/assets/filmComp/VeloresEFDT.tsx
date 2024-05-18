import star  from"../imgs/star.svg";
import mstar from"../imgs/meia-star.svg";
import photo from"../imgs/VEFDTp.jpg";

function VeloresEFDT(){
    return(
    <>

    <div className='itemsr1'>
            <a href="/Velozes-&-Furiosos:Desafio-em-Toquio">
            <img className='it1f' src={photo}/>
    <div className='des1'>
                <p className='tl1'>Velozes & Furiosos: Desafio em Tóquio</p>
    <div className='imdb'>
                <p>4,5</p>
    <div className='sti'>
            <img className='st1' src={star}/>
            <img className='st1' src={star}/>
            <img className='st1' src={star}/>
            <img className='st1' src={star}/>
            <img className='st2' src={mstar}/>
                </div>
            </div>
        </div>
        </a>
    </div>
</>

)}

export default VeloresEFDT