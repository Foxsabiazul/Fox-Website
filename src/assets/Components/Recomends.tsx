import "./Recomends.css"
import star  from "./star.svg";
import mstar from "./meia-star.svg";
import varse from "./V-for-Vendetta-.jpg";
import witch from "./a-bruxa-thewitch-poster.jpg";
import mario from "./The_Super_Mario_Bros._Movie_poster.jpg";
import rastro from"./sem-rastro.jpg";
import open  from "./Openheimer.jpg";
import arch  from "./archive.jpeg";
import white from "./White_chicks.jpeg";
import ilha  from "./ilha-do-medo.jpg";
import enemi from "./public-enemies.jpg";
import irish from "./irisman-movie.jpg";
import avg from "./movies-avengers.jpeg";




function Recomends(){
    return(
        <div className='recomends'>
        <div className="tt">
        <h1 className="tt2">Recomendados</h1>
        </div>
          <li className='itemsr'>
          <div className='itemsr1'>
              <img className='it1f' src={open}/>
              <div className='des1'>
                  <p className='tl1'>Openheimer</p>
                  <div className='imdb'>
                  <p>4,4</p>
                    <div className='sti'>
                    <img className='st1' src={star}/>
                    <img className='st1' src={star}/>
                    <img className='st1' src={star}/>
                    <img className='st1' src={star}/>
                    </div>
                  </div>
              </div>
            </div>
            <div className='itemsr1'>
              <img className='it1f' src={witch}/>
              <div className='des1'>
                  <p className='tl1'>A bruxa</p>
                  <div className='imdb'>
                  <p>4,5</p>
                    <div className='sti'>
                    <img className='st1' src={star}/>
                    <img className='st1' src={star}/>
                    <img className='st1' src={star}/>
                    <img className='st1' src={star}/>
                    <img className="st1" src={star}/>
                    <img className='st2' src={mstar}/>
                    </div>
                  </div>
              </div>
            </div>
            <div className='itemsr1'>
              <img className='it1f' src={mario}/>
              <div className='des1'>
                  <p className='tl1'>Super Mario Bros</p>
                  <div className='imdb'>
                  <p>4,3</p>
                    <div className='sti'>
                    <img className='st1' src={star}/>
                    <img className='st1' src={star}/>
                    <img className='st2' src={mstar}/>
                    </div>
                  </div>
              </div>
            </div>
            <div className='itemsr1'>
              <img className='it1f' src={rastro}/>
              <div className='des1'>
                  <p className='tl1'>Sem Rastros</p>
                  <div className='imdb'>
                  <p>4,5</p>
                    <div className='sti'>
                    <img className='st1' src={star}/>
                    <img className='st1' src={star}/>
                    <img className='st1' src={star}/>
                    <img className='st1' src={star}/>
                    <img className='st1' src={star}/>
                    </div>
                  </div>
              </div>
            </div>
            <div className='itemsr1'>
              <img className='it1f' src={arch}/>
              <div className='des1'>
                  <p className='tl1'>O Protótipo</p>
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
            <div className='itemsr1'>
              <img className='it1f' src={white}/>
              <div className='des1'>
                  <p className='tl1'>As Branquelas</p>
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
            <div className='itemsr1'>
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
            </div>
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
            <div className='itemsr1'>
              <img className='it1f' src={enemi}/>
              <div className='des1'>
                  <p className='tl1'>Inimigos Publicos</p>
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
            <div className='itemsr1'>
              <img className='it1f' src={arch}/>
              <div className='des1'>
                  <p className='tl1'>...</p>
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
          </li>
        </div>
    )
}

export default Recomends