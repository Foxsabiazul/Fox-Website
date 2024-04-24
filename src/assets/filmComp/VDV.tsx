import varse from "../Components/V-for-Vendetta-.jpg";
import star from "../Components/star.svg";
import mstar from "../Components/meia-star.svg";

function Components(){
    return(
        <>
            <div className='itemsr1'>
              <img className='it1f' src={varse}/>
              <div className='des1'>
                  <p className='tl1'>V-de-Vingança</p>
                  <div className='imdb'>
                  <p>4,5</p>
                    <div className='sti'>
                    <img className='st1' src={star}/>
                    <img className='st1' src={star}/>
                    <img className='st1' src={star}/>
                    <img className='st1' src={mstar}/>
                    </div>
                  </div>
              </div>
            </div>
        </>
    )}
    
export default Components