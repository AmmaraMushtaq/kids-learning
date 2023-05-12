


import  React,{useState} from 'react';
import { useTheme } from '@mui/material/styles';
import {Box,Container} from '@mui/material';
import { Link } from 'react-router-dom';

import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import HaroofEtahajipicturedata from '../../cardsData/DetailPages/MatchingPicturesdata'
import Popup from '../../../src/components/Poupup';
import ArrowBack from '@mui/icons-material/ArrowBack';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
function MatchingPictures() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  // const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const [buttonPopup,setButtonPopup]=useState(true)

  return (
    <Container minWidth="sm" >
  <Link to="/MatchingPictureSec">
  <button><ArrowBack/></button>
     
      </Link>
    <Box sx={{ Width:'100%', flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>Activity</Typography>
      </Paper>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
      
      <h1>google add</h1></Popup>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {HaroofEtahajipicturedata .map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
             <Box
             component="img"
             sx={{
               height:'auto',
               display: 'block',
            
              
               width: '90%',
             }}
             src={step.imgsrc}
             alt={step.label}
           />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <MobileStepper
      style={{overflow:'scroll'
    
    }}

        steps={HaroofEtahajipicturedata .length}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === HaroofEtahajipicturedata .length - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
    </Container >

  );
}

export default MatchingPictures;
