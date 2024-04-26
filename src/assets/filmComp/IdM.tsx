import star from "../imgs/star.svg" ;
import mstar from "../imgs/meia-star.svg";
import ilha from "../imgs/ilha-do-medo.jpg";

function IdM(){
return(
    <>
    <div className='itemsr1'>
                <img className='it1f' src={ilha}/>
    <div className='des1'>
                    <p className='tl1'>Ilha do Medo</p>
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
    </div> 
</>
)}

export default IdM
