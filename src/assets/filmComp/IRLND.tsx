import star from "../Components/star.svg";
import mstar from  "../Components/meia-star.svg";
import irish from "../Components/irisman-movie.jpg";

function Components(){
        return(
    <>
            <div className='itemsr1'>
            <img className='it1f' src={irish}/>
            <div className='des1'>
                <p className='tl1'>O irlândes</p>
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

export default Components