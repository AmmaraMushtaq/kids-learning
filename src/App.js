// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import { Paper, Button } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import './App.css';
import Layout from './components/layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Worksheet from './pages/Worksheets'
import Videos from './pages/Videos'
import Contactus from './pages/contactus'
import Notfound from './pages/Notfound'
import Urdu from './pages/Urdu'
import ColoringPages from './pages/ColoringPages'
import Grammer from './pages/sub-pages/Grammer'
import Articals from './pages/Articals'
import FlashCards from './pages/FlashCards'
import Help from './pages/Help'
import ActivitySheet from '../src/pages/sub-pages/ActivitySheet'
import Writing from './pages/sub-pages/Writing';
import DotTracing from './pages/sub-pages/DotTracing';
import MatchingPictures from './pages/sub-pages/MatchingPictures'
import MissingHaroof from './pages/sub-pages/MissingHaroof';
import PicturesWithHaroof from './pages/sub-pages/picturesWithHaroof'
import PictureWithHaroof from './pages/sub-pages/PictureWithHaroof'
import ConfusingLetters from './pages/sub-pages/ConfusingLetters'
import ReOrderHaroof from './pages/sub-pages/ReOrderHaroof'
import RoadsActivity from './pages/sub-pages/RoadsActivity'
import MatchingSounds from './pages/sub-pages/MatchingSounds'
import ActivityWorksheet from './pages/sub-pages/ActivityWorksheet'
import RainbowWriting from './pages/sub-pages/RainbowWriting ';
import Secpage from './components/next/secpag';
import HaroofETahajiPictureData from './cardsData/DetailPages/HaroofETahajiPicturesData'
import data from '../src/Data'
import WritingData from './cardsData/DetailPages/WritingData'
import RoadsActivityData from './cardsData/DetailPages/RoadsActivityData'
import haroofETahajiColoringPagesaData from './cardsData/HaroofETahajiColoringPagesaData'
import GrammerData from '../src/cardsData/DetailPages/GrammerData'
import ActivityData from './cardsData/DetailPages/ActivityData'
import TracingData from './cardsData/DetailPages/TracingData'
import HaroofEtahajipicturedata from '../src/cardsData/DetailPages/MatchingPicturesdata'
import HaroofEtahajiTarteeb from '../src/cardsData/DetailPages/HaroofEtahajiTarteeb'
import similarHaroofActivitySheetsData from '../src/cardsData/DetailPages/similarHaroofActivitySheetsData'
import Products from './components/next/Products';
import DotSec from './components/next/DotSec';
import PicHroofSec from '../src/components/next/PicHroofSec'
import  GrammerSec from './components/next/GrammerSec'
import MatchingPictureSec from './components/next/MatchingPictureSec'
import MatchingSoundSec from './components/next/MatchingSoundSec'
import ActivitysheetSec from '../src/components/next/ActivitysheetSec'
import MissingHaroofSec from './components/next/MissingHaroofSec'
import PictureHaroofSec from './components/next/PictureHaroofSec'
import RainbowSec from './components/next/RainbowSec'
import RoadSec from './components/next/RoadSec'
import WrittingSec from './components/next/WrittingSec'
function App() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2
  };
  return (
    <>
    
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/worksheet" element={<Worksheet />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="*" element={<Notfound />} />
          {/* dropdown */}
          {/* <Route path="/" element={<Home/>}/> */}
          <Route path="/urdu" element={<Worksheet />} />
          <Route path="/coloring Pages" element={<ColoringPages />} />
          <Route path="/articals" element={<Articals />} />
          <Route path="/flashCards" element={<FlashCards />} />
          <Route path="/help" element={<Help />} />

          {/* subpages */}
          <Route path="/activitySheet" element={<ActivitySheet />} />
          <Route path="/activityWorksheet" element={<ActivityWorksheet />} />
          <Route path="/dotTracing" element={<DotTracing />} />
          <Route path="/grammer" element={<Grammer />} />
          <Route path="/matchingPictures" element={<MatchingPictures />} />
          <Route path="/matchingSounds" element={<MatchingSounds />} />
          <Route path="/picturesWithHaroof" element={<PicturesWithHaroof />} />
          <Route path="/PictureWithHaroof" element={<PictureWithHaroof />} />

          <Route path="/rainbowWriting" element={<RainbowWriting />} />
          <Route path="/roadsActivity" element={<RoadsActivity />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/missingHaroof" element={<MissingHaroof />} />

          {/* 
     }
      <Route path="/reOrderHaroof" element={<ReOrderHaroof/>}/>
      <Route path="/confusingLetters" element={<ConfusingLetters/>}/>
      
      */}
{/* nextpages */}
<Route path="/secpage" element={<Secpage/>} />
<Route path="/dotsec" element={<DotSec/>} />
<Route path="/PicHroofSec" element={<PicHroofSec/>} />
<Route path="/ActivitysheetSec" element={<ActivitysheetSec/>} />
<Route path="/GrammerSec" element={< GrammerSec />} />
<Route path="/MatchingPictureSec" element={<MatchingPictureSec />} />
<Route path="/MatchingSoundSec" element={<MatchingSoundSec/>} />
<Route path="/MissingHaroofSec" element={<MissingHaroofSec/>} />
<Route path="/PictureHaroofSec" element={<PictureHaroofSec/>} />
<Route path="/RainbowSec" element={<RainbowSec/>} />
<Route path="/RoadSec" element={<RoadSec/>} />
<Route path="/WrittingSec" element={<WrittingSec/>} />

<Route path="/products" element={<Products/>} />


        </Routes>

      </BrowserRouter>


      

    </>
  )



}

export default App;
