import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Container,Box } from '@mui/material'
import React from 'react'
import Layout from '../components/layout/Layout'
import Banner from '../Images/logo.png'
import '../Styles/worksheetStyle.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import DropDown from './DropDown'
const Top = () => {
  return (
    
      <Container maxWidth='lg'style={{backgroundColor: '#719d9d'}}>
        <div className='worksheet-main'>
        <div className='worksheet-img'> <img src={Banner}width=' 35%' height= '20%'/>
   
        <p>Worksheet for preschool</p>
        </div>
        <div className='links'>
          <p> share </p>
          <div className='share-link'>
          <Box sx={{my:1, "& svg":{
        fontSize:"20px",
        cursur:'pointer',
        mr:2,},
        "& svg:hover":{
            color:'goldenrod',
            transform:'translatex(5px)',
            transition:'all 400ms'

        }
    }}>
        {/* icons */}
        <InstagramIcon/><YouTubeIcon/><TwitterIcon/><FacebookIcon/><WhatsAppIcon/><GoogleIcon/>
    </Box>
          
          </div>

          <div className='follow'>
          <p>Follow us</p>
          <div className='share-link'>
          <Box sx={{my:1, "& svg":{
        fontSize:"20px",
        cursur:'pointer',
        mr:2,},
        "& svg:hover":{
            color:'goldenrod',
            transform:'translatex(5px)',
            transition:'all 400ms'

        }
    }}>
        {/* icons */}
        <InstagramIcon/><FacebookIcon/><TwitterIcon/>
    </Box>
          
            
          </div>
          </div>
        </div>
        </div>
      
        <DropDown />
      </Container>
      
    
  )
}
export default Top