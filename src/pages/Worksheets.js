import { Container, Box,  Typography,Button,Card,CardActions ,CardContent } from '@mui/material'
import React,{useState} from 'react'
import Layout from '../components/layout/Layout'
import Banner from '../Images/logo.png'
import '../Styles/worksheetStyle.css'

import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GoogleIcon from '@mui/icons-material/Google';
import DropDown from './DropDown'
import { Link } from 'react-router-dom'
import CardHomeData from '../cardsData/homeCardData'
import CardHroof from '../pages/cards/card'

const Worksheets = () => {
 
 
  
  return (
    <Layout>
      <Container maxWidth='lg' 
       style={{ backgroundColor:'#dddddd',borderBottom:'8px solid #ce4b6a',borderTOP:'15px solid #dea824'}}
    
      >
        <div className='worksheet-main'>
          <div className='worksheet-img'>
             <img src={Banner} alt="" />
            <p>Worksheet for preschool</p>
          </div> 
          <div className='links'>
            <p> share </p>
           <div className='share-link'>
              <Box sx={{
                my: 1, "& svg": {
                  fontSize: "20px",
                  cursur: 'pointer',
                  color:'black',
                  mr: 2,
                },
                "& svg:hover": {
                  color: '#dea824',
                  transform: 'translatex(5px)',
                  transition: 'all 400ms'

                }
              }}>
                {/* icons */}
                <InstagramIcon /><YouTubeIcon /><TwitterIcon /><FacebookIcon /><WhatsAppIcon /><GoogleIcon />
              </Box>

            </div>

          <div className='follow'>
              <p>Follow us</p>
              <div className='share-link'>
                <Box sx={{
                  my: 1, "& svg": {
                    fontSize: "20px",
                    cursur: 'pointer',
                    color:'black',
                    mr: 2,
                  },
                  "& svg:hover": {
                    color: 'goldenrod',
                    transform: 'translatex(5px)',
                    transition: 'all 400ms'
                  }
                }}>
                  {/* icons */}
                  <InstagramIcon /><FacebookIcon /><TwitterIcon />
                </Box>


              </div>
            </div> 
          </div>
        </div> 

       

        <Container maxWidth='lg'
  
    style={{ backgroundColor: 'White', paddingTop: '0px' , borderBottom: ' 8px solid #1d9978',marginBottom:'5px',borderTop:"8px solid #59a5d1" }}
        >
           <DropDown />
          <div className='list'>
          {/* <div className='worksheet-main'>
          <div className='worksheet-img'>
             <img src={Banner} alt="" />
            <p>Worksheet for preschool</p>
          </div> */}
            <ul>
              <li><Link to={'/activitySheet'} target="_blank">ActivitySheet </Link></li>
              <li><Link to={'/dottracing'} target="_blank">Dottracing</Link></li>
              <li><Link to={'/writing'} target="_blank"> writing-pages</Link></li>
              <li><Link to={'/rainbowWriting'} target="_blank">rainbow-writing </Link></li>
              <li><Link to={'/roadsActivity'} target="_blank">roads-activity  </Link></li>
              <li><Link to={'/confusingLetters'} target="_blank">confusing-letters </Link></li>
              <li><Link to={'/matchingSounds'} target="_blank"> matching-sounds </Link></li>
              <li><Link to={'/matchingPictures'}target="_blank"> matching-pictures </Link></li>
              <li><Link to={'/picturesWithHaroof'} target="_blank"> picture-with-haroof </Link></li>
              <li><Link to={'/reOrderHaroof'} target="_blank"> re-order-haroof  </Link></li>
              <li><Link to={'/missingHaroof'} target="_blank"> missing-haroof </Link></li>
              <li><Link to={'/grammer'} target="_blank"> urdu-Grammer </Link></li>
              <li><Link to={'/activityWorksheet'} target="_blank"> worksheet </Link></li>
              <li><Link to={'/pictureWithHaroof'} target="_blank"> pictures-with-haroof </Link></li>
               

            </ul>
            {/* <div className='links'>
            <p> share </p>
            <div className='share-link'>
              <Box sx={{
                my: 1, "& svg": {
                  fontSize: "20px",
                  cursur: 'pointer',
                  color:'black',
                  mr: 2,
                },
                "& svg:hover": {
                  color: '#dea824',
                  transform: 'translatex(5px)',
                  transition: 'all 400ms'

                }
              }}>
                {/* icons */}
                {/* <InstagramIcon /><YouTubeIcon /><TwitterIcon /><FacebookIcon /><WhatsAppIcon /><GoogleIcon />
              </Box>

            </div>
         
          </div>
          <div className='follow'>
              <p>Follow us</p>
              <div className='share-link'>
                <Box sx={{
                  my: 1, "& svg": {
                    fontSize: "20px",
                    cursur: 'pointer',
                    color:'black',
                    mr: 2,
                  },
                  "& svg:hover": {
                    color: 'goldenrod',
                    transform: 'translatex(5px)',
                    transition: 'all 400ms'
                  }
                }}> */}
                  {/* icons */}
                  {/* <InstagramIcon /><FacebookIcon /><TwitterIcon />
                </Box>


              </div>
            </div>
 </div>
 */}
  </div> 
        </Container>
        <div className='paragraph'> <p>Worksheets are free only for personal
          educational  use. Any attempt to modify, sell, mirror, upload on your
          servers or commercial use violates </p></div>
        <div className='containers'>
          {/* <Container maxWidth='lg' style={{ backgroundColor: '#307611', display: 'flex' }}> */}
          <Container maxWidth='md' style={{  }}>
            <div className='heading'> Free Printable Urdu Worksheets for Preschool </div>
            <div className='paragraph2'><p>Are your looking for free printable urdu
              Worksheets for Preschool? Not sure what your child should
              start learning in his/her initial years? Your search ends here!!! </p><br/>
              <p> We have hundreds of free Urdu worksheets for preschool children.
                Check our worksheets for haroof recognition and formation, hroof tracing, things that
                start with an haroof, learning to read and write first words and many more.</p>
            </div>

            <div className='buttons'>
              <div className='btn1'> <button > urdu</button></div>
              <div className='btn2'> <button>Hroof</button></div>
              
            </div>
            

            <CardHroof details={CardHomeData}/>
          
           
          </Container>
          <Container maxWidth='xs' style={{paddingTop: '5%',width:"20%" ,backgroundColor:'whitesmoke'}}>
              

            </Container>

        </div>
      </Container>




      {/* </Container> */}

    </Layout>
  )
}

export default Worksheets