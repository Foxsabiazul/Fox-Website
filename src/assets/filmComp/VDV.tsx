import star from "../imgs/star.svg";
import mstar from "../imgs/meia-star.svg";
import varse from "../imgs/V-for-Vendetta-.jpg";

function VDV(){
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
                    <img className='st1' src={star}/>
                    <img className='st1' src={mstar}/>
                    </div>
                  </div>
              </div>
            </div>
        </>
    )}
    
export default VDV