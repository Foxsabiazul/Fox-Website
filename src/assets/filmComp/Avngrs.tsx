import Star  from "../imgs/star.svg";
import mstar from "../imgs/meia-star.svg";
import avg   from "../imgs/movies-avengers.jpeg";

function Avngrs(){
    return(
        <>
    <div className='itemsr1'>
            <img className='it1f' src={avg}/>
    <div className='des1'>
                <p className='tl1'>Vingadores</p>
    <div className='imdb'>
                <p>4,5</p>
    <div className='sti'>
            <img className='st1' src={Star}/>
            <img className='st1' src={Star}/>
            <img className='st1' src={Star}/>
            <img className='st1' src={Star}/>
            <img className='st2' src={mstar}/>
                </div>
            </div>
        </div>
    </div>
</>
)}

export default Avngrs