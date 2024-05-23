import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import MainPage from './Pages/mainPage';
import Loogin from './Pages/loogin';
import Movies from './Pages/movies';
import VDVpage from './assets/filmPages/VDVpage';
import AsBpage from './assets/filmPages/AsBpage';
import Avngrspage from './assets/filmPages/Avngrspage';
import BlandRunpage from './assets/filmPages/BladRunpage';
import IdMpage from './assets/filmPages/IdMpage';
import IniPpage from './assets/filmPages/IniPpage';
import IRLNDpage from './assets/filmPages/IRLNDpage';
import MARIOpage from './assets/filmPages/MARIOpage';
import OPpage from './assets/filmPages/OPpage';
import Openheimerpage from './assets/filmPages/Openheimerpage';
import SRpage from './assets/filmPages/SRpage';
import WITCHpage from './assets/filmPages/WITCHpage';
import Matrixpage from './assets/filmPages/Matrixpage';
import Sevenpage from './assets/filmPages/Sevenpage';
import SonhodLpage from './assets/filmPages/sonhodLpage';
import OsSuspeitos from './assets/filmPages/OsSuspeitospage';
import DeVoltaPFpage from './assets/filmPages/DeVoltaPFpage';
import PulpFictpage from './assets/filmPages/PulpFictpage';
import OsSuspeitospage from './assets/filmPages/OsSuspeitospage';
import OSilencioDIpage from './assets/filmPages/OSilencioDIpage';
import ClubeDaLutapage from './assets/filmPages/ClubeDaLutapage';
import BrilhoEDSLpage from './assets/filmPages/BrilhoEDSLpage';
import IndianaJonesCDAPpage from './assets/filmPages/IndianaJonesCDAPpage';
import IndianaJonesUCpage from './assets/filmPages/IndianaJonesUCpage';
import IndianaJonesTPpage from './assets/filmPages/IndianaJonesTPpage';
import IndianaJonesRCCpage from './assets/filmPages/IndianaJonesRCCpage';
import IndianaJonesARDpage from './assets/filmPages/IndianaJonesARDpage';
import VelozesEFpage from './assets/filmPages/VelozesEFpage';
import VelozesEFMpage from './assets/filmPages/VelozesEFMpage';
import VelozesEFDTpage from './assets/filmPages/VelozesEFDTpage';
import VelozesEF4page from './assets/filmPages/VelozesEF4page';
import VelozesEF5page from './assets/filmPages/VelozesEF5page';
import VelozesEF6page from './assets/filmPages/VelozesEF6page';
import VelozesEF7page from './assets/filmPages/VelozesEF7page';
import VelozesEF8page from './assets/filmPages/VelozesEF8page';
import VelozesEF9page from './assets/filmPages/VelozesEF9page';
import VelozesEF10page from './assets/filmPages/VelozesEF10page';
import HarryPotterPFpage from './assets/filmPages/HarryPotterPFpage';
import HarryPotterCSpage from './assets/filmPages/HarryPotterCSpage';
import HarryPotterPApage from './assets/filmPages/HarryPotterPApage';
import HarryPotterCFpage from './assets/filmPages/HarryPotterCFpage';
import HarryPotterEPpage from './assets/filmPages/HarryPotterEPpage';
import HarryPotterOFpage from './assets/filmPages/HarryPotterOFpage';
import HarryPotterRM1page from './assets/filmPages/HarryPotterRM1page';
import HarryPotterRM2page from './assets/filmPages/HarryPotterRM2page';
import ParaTodosOGpage from './assets/filmPages/ParaTodosOGpage';
import ParaTodosOGPSpage from './assets/filmPages/ParaTodosOGPSpage';
import ParaTodosOG3page from './assets/filmPages/ParaTodosOG3page';
import Shrekpage from './assets/filmPages/Shrekpage';
import Shrek2page from './assets/filmPages/Shrek2page';
import Shrek3page from './assets/filmPages/Shrek3page';
import ShrekPSpage from './assets/filmPages/ShrekPSpage';
import SenhorDosApage from './assets/filmPages/SenhorDosApage';
import SenhorDosADTpage from './assets/filmPages/SenhorDosADTpage';
import SenhorDosARDRpage from './assets/filmPages/SenhorDosARDRpage';
import StarWars1page from './assets/filmPages/StarWars1page';
import StarWars2page from './assets/filmPages/StarWars2page';
import StarWars4page from './assets/filmPages/StarWars4page';
import StarWars3page from './assets/filmPages/StarWars3page';
import StarWars5page from './assets/filmPages/StarWars5page';
import StarWars6page from './assets/filmPages/StarWars6page';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Loogin/>}/>
      <Route path='/home' element={<MainPage/>}/>
      <Route path='/movies' element={<Movies/>}/>

      <Route path='/terror' element={<Movies/>}/>
      <Route path='/ação' element={<Movies/>}/>

      <Route path='/As-Branquelas' element={<AsBpage/>}/>
      <Route path='/Vingadores-Guerra-Infinita' element={<Avngrspage/>}/>
      <Route path='/Blade-Runner-2049' element={<BlandRunpage/>}/>
      <Route path='/Ilha-do-Medo' element={<IdMpage/>}/>
      <Route path='/Inimigos-Publicos' element={<IniPpage/>}/>
      <Route path='/O-irlandes' element={<IRLNDpage/>}/>
      <Route path='/Super-Mario' element={<MARIOpage/>}/>
      <Route path='/O-Prototipo' element={<OPpage/>}/>
      <Route path='/Openheimer' element={<Openheimerpage/>}/>
      <Route path='/Sem-Rastros' element={<SRpage/>}/>
      <Route path='/V-de-Vingança' element={<VDVpage/>}/>
      <Route path='/A-Bruxa' element={<WITCHpage/>}/>
      <Route path='/Matrix' element={<Matrixpage/>}/>
      <Route path='/Os-Suspeitos' element={<OsSuspeitos/>}/>
      <Route path='/Seven-Os-Sete-Crimes-Capitais' element={<Sevenpage/>}/>
      <Route path='/Um-Sonho-de-Liberdade' element={<SonhodLpage/>}/>
      <Route path='/Pulp-Fiction-Tempo-de-Violencia' element={<PulpFictpage/>}/>
      <Route path='/De-Volta-para-o-Futuro' element={<DeVoltaPFpage/>}/>
      <Route path='/Os-Suspeitos' element={<OsSuspeitospage/>}/>
      <Route path='/O-Silencio-dos-Inocentes' element={<OSilencioDIpage/>}/>
      <Route path='/Clube-Da-Luta' element={<ClubeDaLutapage/>}/>
      <Route path='/Brilho-Eterno-de-uma-Mente-Sem-Lembrancas' element={<BrilhoEDSLpage/>}/>
      <Route path='/Indiana-Jones-Os-Cacadores-da-Arca-Perdida' element={<IndianaJonesCDAPpage/>}/>
      <Route path='/Indiana-Jones-e-a-Ultima-Cruzada' element={<IndianaJonesUCpage/>}/>
      <Route path='/Indiana-Jones-e-o-Templo-da-Perdicao' element={<IndianaJonesTPpage/>}/>
      <Route path='/Indiana-Jones-e-o-Reino-da-Caveira-de-Cristal' element={<IndianaJonesRCCpage/>}/>
      <Route path='/Indiana-Jones-e-A-Reliquia-do-Destino' element={<IndianaJonesARDpage/>}/>
      <Route path='/Velozes-&-Furiosos' element={<VelozesEFpage/>}/>
      <Route path='/+Velozes-+Furiosos' element={<VelozesEFMpage/>}/>
      <Route path='/Velozes-&-Furiosos:Desafio-em-Toquio' element={<VelozesEFDTpage/>}/>
      <Route path='/Velozes-&-Furiosos4' element={<VelozesEF4page/>}/>
      <Route path='/Velozes-&-Furiosos5:Operacao-Rio' element={<VelozesEF5page/>}/>
      <Route path='/Velozes-&-Furiosos6' element={<VelozesEF6page/>}/>
      <Route path='/Velozes-&-Furiosos7' element={<VelozesEF7page/>}/>
      <Route path='/Velozes-&-Furiosos8' element={<VelozesEF8page/>}/>
      <Route path='/Velozes-&-Furiosos9' element={<VelozesEF9page/>}/>
      <Route path='/Velozes-&-Furiosos10' element={<VelozesEF10page/>}/>
      <Route path='/Harry-Potter-e-a-Pedra-Filosofal' element={<HarryPotterPFpage/>}/>
      <Route path='/Harry-Potter-e-a-Camara-Secreta' element={<HarryPotterCSpage/>}/>
      <Route path='/Harry-Potter-e-o-Prisioneiro-de-Azkaban' element={<HarryPotterPApage/>}/>
      <Route path='/Harry-Potter-e-o-Calice-de-Fogo' element={<HarryPotterCFpage/>}/>
      <Route path='/Harry-Potter-e-o-Enigma-do-Principe' element={<HarryPotterEPpage/>}/>
      <Route path='/Harry-Potter-e-a-Ordem-da-Fenix' element={<HarryPotterOFpage/>}/>
      <Route path='/Harry-Potter-e-as-Reliquias-da-Morte-Parte1' element={<HarryPotterRM1page/>}/>
      <Route path='/Harry-Potter-e-as-Reliquias-da-Morte-Parte2' element={<HarryPotterRM2page/>}/>
      <Route path='/Para-Todos-os-Garotos-que-Ja-Amei' element={<ParaTodosOGpage/>}/>
      <Route path='/Para-Todos-Os-Garotos:PS-Ainda-Amo-Voce' element={<ParaTodosOGPSpage/>}/>
      <Route path='/Para-Todos-os-Garotos3' element={<ParaTodosOG3page/>}/>
      <Route path='/Shrek' element={<Shrekpage/>}/>
      <Route path='/Shrek2' element={<Shrek2page/>}/>
      <Route path='/Shrek3' element={<Shrek3page/>}/>
      <Route path='/Shrek-para-Sempre' element={<ShrekPSpage/>}/>
      <Route path='/Senhor-dos-Aneis-A-Sociedade-do-Anel' element={<SenhorDosApage/>}/>
      <Route path='/Senhor-dos-Aneis-As-Duas-Torres' element={<SenhorDosADTpage/>}/>
      <Route path='/Senhor-dos-Aneis-O-Retorno-do-Rei' element={<SenhorDosARDRpage/>}/>
      <Route path='/Star-Wars:A-Ameaça-Fantasma' element={<StarWars1page/>}/>
      <Route path='/Star-Wars:Ataque-dos-Clones' element={<StarWars2page/>}/>
      <Route path='/Star-Wars:A-Vingança-dos-Sith' element={<StarWars3page/>}/>
      <Route path='/Star-Wars:Uma-Nova-Esperança' element={<StarWars4page/>}/>
      <Route path='/Star-Wars:O-Imperio-Contra-ataca' element={<StarWars5page/>}/>
      <Route path='/Star-Wars:O-Retorno-de-Jedi' element={<StarWars6page/>}/>
      
    </Routes>
   </BrowserRouter>
  )
}

export default App
