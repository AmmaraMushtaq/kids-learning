import { Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
  return (
   <>
   <Box sx={{textAlign:"center",bgcolor:'#1a1a19',color:'white',p:3,marginBottom:'3px'}}>
    <Box sx={{my:1, "& svg":{
        fontSize:"40px",
        cursur:'pointer',
        mr:2,},
        "& svg:hover":{
            color:'goldenrod',
            transform:'translatex(5px)',
            transition:'all 400ms'

        }
    }}>
        {/* icons */}
        <InstagramIcon/><YouTubeIcon/><TwitterIcon/><FacebookIcon/>
    </Box>
    <Typography variant='h5'sx={{"@media(max-width:600px)":{fontSize:"1rem"},}}>
    like us on fb youtube twiter and instragram
    </Typography>

   </Box>
   </>
  )
}

export default Footer