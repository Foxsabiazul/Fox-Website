import star from '../imgs/star-svgrepo-com 1.svg';
import mstar from '../imgs/star-svgrepo-com 2.svg';
import blru from '../imgs/poster-blade-runner.jpeg';


function BLR (){
    return(
<>
    <div className='itemsr1'>
                <img className='it1f' src={blru}/>
    <div className='des1'>
                    <p className='tl1'>Blade Runner</p>
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

export default BLR
