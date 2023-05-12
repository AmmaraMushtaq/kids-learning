// // import React from 'react'
// // import {Button, Card} from '@mui/material'
// // import { Link } from 'react-router-dom'
// // import '../../Styles/card.css'
// // // import CardHomeData1 from '../cardsData/DetailPages/homeCardData1'


// // import homeCardData from '../../cardsData/homeCardData'
// // import  TracingData from '../../cardsData/DetailPages/TracingData'
// // import  ActivityData from '../../cardsData/DetailPages/ActivityData'
// // import  RoadsActivityData from '../../cardsData/DetailPages/RoadsActivityData'
// // import WritingData from '../../cardsData/DetailPages/WritingData'

// // import CardHomeData1 from '../../cardsData/DetailPages/GrammerData'
// // import haroofETahajiColoringPagesaData from '../../cardsData/HaroofETahajiColoringPagesaData'
// // import HaroofEtahajiTarteeb from '../../cardsData/DetailPages/HaroofEtahajiTarteeb'
// // import HaroofETahajiPictureData  from '../../cardsData/DetailPages/MatchingPicturesdata'
// // import HaroofEtahajipicturedata from '../../cardsData/DetailPages/MatchingPicturesdata'
// // import similarHaroofActivitySheetsData  from '../../cardsData/DetailPages/similarHaroofActivitySheetsData'

// // const Secpage= (props) => {
// //     const detail = () => {
// //         return (
// //             <>
// //         <Secpage details={homeCardData}/>
// //         <Secpage details={HaroofEtahajiTarteeb}/>
// //         <Secpage details={HaroofEtahajipicturedata}/>
// //         <Secpage details={similarHaroofActivitySheetsData}/>
// //         <Secpage details={ HaroofETahajiPictureData}/>
// //         <Secpage details={TracingData}/>
// //         <Secpage details={ActivityData}/>
// //         <Secpage details={GrammerData}/>
// //         <Secpage details={haroofETahajiColoringPagesaData}/>
// //         <Secpage details={RoadsActivityData}/>
// //         <Secpage details={WritingData}/>


// //             </>
// //           )
// //         }
   
     
// //   return (
// //     <>
// //     <div className='cards' >
// //          {/* {props.details.map((value,index)=>( */}
// //         <div className='card' >
// //           <div className='detail' >
          
// //        <div className='card-img'  >
// //         <div>
// //         {/* <Link to={value.path} target="_blank">//</Link> */}
// //       <img src=''  />
    
// //       </div>

// //       </div>
// //       </div>
// //       <div className='descripation' >
// //         {/* <h5>{value.h4}</h5>
// //         <p>{value.descripation}</p> */}
// //       <Button><Link to='/' target="_blank">Learn More</Link></Button>
     
// //       </div>
      
// //       </div>
// //   {/* ))} */}
// //   </div>
// //     </>
  
// //   )
// // }

// // export default Secpage


// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import {Box,Container} from '@mui/material';

// import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';
// import CardHomeData1 from '../../cardsData/DetailPages/homeCardData1'

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
// function Secpage() {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
// //    const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return (
//     // <Container minWidth="sx" >

//     <Box sx={{ maxHeight: 400, flexGrow: 1 }}>
//       <Paper
//         square
//         elevation={0}
//         sx={{
//             display: 'flex',
//             alignItems: 'center',
//             height: 50,
//             pl: 2,
//             bgcolor: 'background.default',
//         }}
//       >
//         <Typography>Activity</Typography>
//       </Paper>
//       <AutoPlaySwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//         enableMouseEvents
//       >
//         {CardHomeData1.map((step, index) => (
//           <div key={step.label}>
//             {Math.abs(activeStep - index) <= 2 ? (
//               <Box
//                 component="img"
//                 lg={{
//                     height: 255, maxWidth: 400, width: '100%', p: 2
//                 }}
//                 src={step.imgsrc}
//                 src1={step.imgsrc}

//                 alt={step.label}
//               />
//             ) : null}
//           </div>
//         ))}
//       </AutoPlaySwipeableViews>
//       <MobileStepper
//         steps={CardHomeData1.length}
//         position="static"
//         activeStep={activeStep}
//         nextButton={
//           <Button
//             size="small"
//             onClick={handleNext}
//             disabled={activeStep === CardHomeData1.length - 1}
//           >
//             Next
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowLeft />
//             ) : (
//               <KeyboardArrowRight />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowRight />
//             ) : (
//               <KeyboardArrowLeft />
//             )}
//             Back
//           </Button>
//         }
//       />
//     </Box>
//     // </Container >

//   );
// }

// export default Secpage;
import "../../Styles/ActivitySheet.css";
import React, { Component } from "react";
import Products from "./Products";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import GrammerData from '../../cardsData/DetailPages/GrammerData'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from 'react-router-dom'
import ArrowBack from '@mui/icons-material/ArrowBack';

function GrammerSec() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
//   const Product=GrammerData.map(item=>(
// <Products imgsrc={item.imgsrc} path={item.path} />
//   ))

  return (
    <div className='Imagelist'>
       <Link to ='/worksheet'>
       <button><ArrowBack/></button>
      </Link>
      <div className='cards-row' >
      {GrammerData.map((item) => (
        
          <ImageListItem key={item.imgsrc} responsive={responsive}>
            <div className='card-next' >
     <div className='card-image'>
             <Link to={item.path} target="_blank">
             <img
   src={item.imgsrc} width="100%" height='75%'
    loading="lazy"
 />
             </Link>
             </div></div>
          </ImageListItem>
     
  ))}
 
  </div>
            
      </div>
    );
  }
export default GrammerSec;
