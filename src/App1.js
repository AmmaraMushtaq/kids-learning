import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
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
import ActivitySheet from '../src/pages/sub-pages/ActivitySheet'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App1 = () => {
    function allData (value){
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        return(
          <>
          {/* <ActivitySheet
          imgsrc={value.imgsrc}
          /> */}
       <div className="slider"> 
          <Slider {...settings}>
          <div className="he">
            <h1>dedh</h1>
          
           <ActivitySheet
          imgsrc={value.imgsrc}
          /></div>
            </Slider></div>
          {/* <MatchingPictures imgsrc={value.imgsrc} /> */}
          </>
        )
      }
  return (
   <>
       <BrowserRouter>
 
 <Routes>
    {/* subpages */}
    <Route  path="/activitySheet"  element= {similarHaroofActivitySheetsData.map(allData)} />
      <Route path="/writing" element={WritingData.map(allData)}/>
      <Route path="/dotTracing" element={TracingData.map(allData)}/>
      <Route path="/matchingPictures" element={HaroofEtahajipicturedata.map(allData)}/>
      <Route path="/missingHaroof" element={HaroofEtahajiTarteeb.map(allData)}/>
      <Route path="/rainbowWriting" element={haroofETahajiColoringPagesaData.map(allData)}/>
      {/* <Route path="/reOrderHaroof" element={<ReOrderHaroof/>}/> */}
      <Route path="/roadsActivity" element={RoadsActivityData.map(allData)}/>
      <Route path="/picturesWithHaroof" element={HaroofETahajiPictureData.map(allData)}/>
      {/* <Route path="/confusingLetters" element={<ConfusingLetters/>}/> */}
      <Route path="/grammer" element={GrammerData.map(allData)}/>
      <Route path="/activityWorksheet" element={ActivityData.map(allData)}/>
      <Route path="/matchingSounds"  element={data.map(allData)}/>

     </Routes>

      </BrowserRouter>
     
      
   </>
  )
}

export default App1

