import star  from "../imgs/starating_1.png";
import mstar from "../imgs/stars.png";
import white from"../imgs/White_chicks.jpeg";
import "./AsB.css";

function AsB(){
    return(
    <>

    <div className='itemsr1'>
            <a href="/As-Branquelas">
            <img className='it1f' src={white}/>
    <div className='des1'>
                <div className='tl1'>As Branquelas</div>
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
        </a>
    </div>
</>

)}

export default AsB