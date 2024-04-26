import Star from "../imgs/star.svg";
import mstar from "../imgs/meia-star.svg";
import mario from "../imgs/The_Super_Mario_Bros._Movie_poster.jpg";

function MARIO(){
    return(
    <>
<div className='itemsr1'>
              <img className='it1f' src={mario}/>
              <div className='des1'>
                  <p className='tl1'>Super Mario Bros</p>
                  <div className='imdb'>
                  <p>4,3</p>
                    <div className='sti'>
                    <img className='st1' src={Star}/>
                    <img className='st1' src={Star}/>
                    <img className='st2' src={mstar}/>
                    </div>
                  </div>
              </div>
            </div>
    </>

    )}

export default MARIO