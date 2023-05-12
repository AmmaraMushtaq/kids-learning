


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
import WritingData from '../../cardsData/DetailPages/WritingData'
import Popup from '../../../src/components/Poupup';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Header from '../../components/layout/Header'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
function Writing () {
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
    <> <Header/>
    <Container minWidth="sm" >
  <Link to="/WrittingSec">
  <button><ArrowBack/></button>
    
      </Link>
    <Box sx={{ Width: '100%', flexGrow: 1 }}>
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
        {WritingData.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                 height: '100%',
                  display: 'block',
                  // maxWidth: 400,
                 
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
      style={{justifyContent:'center',minWidth:'10%'}}
        steps={WritingData.length}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === WritingData.length - 1}
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
              <KeyboardArrowRight/>
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
    </Container>
    </>
  );
}

export default Writing ;

