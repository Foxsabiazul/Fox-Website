import star  from"../imgs/star-svgrepo-com 1.svg";
import mstar from"../imgs/star-svgrepo-com 2.svg";
import avg   from "../imgs/movies-avengers.jpeg";

function Avngrs(){
    return(
        <>
    <div className='itemsr1'>
        <a href="/Vingadores-Guerra-Infinita">
            <img className='it1f' src={avg}/>
    <div className='des1'>
                <p className='tl1'>Vingadores</p>
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

export default Avngrs