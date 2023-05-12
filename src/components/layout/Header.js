import React, { useState } from 'react'
import {AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography} from '@mui/material'
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { Link } from 'react-router-dom';
import '../../Styles/HeaderStyles.css'
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
  const [mobileOpen,setMobileOpen]=useState(false)
  //handle menu click
  const handleDrawerToggle=()=>{
    setMobileOpen(!mobileOpen)
  }
  //menu drawer
  const drawer=(
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
      <Typography color={"goldenrod"} varient="h6" component="div" sx={{flexGrow:1,my:2}}>
          <DesignServicesIcon/>
          chand our tara
          {/* <img src="./images/logo.jpeg" alt=''/> */}
        </Typography>
        <Divider/>
          <ul className='mobile-navigation'>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/worksheet'}>worksheet</Link>
            </li>
            <li>
              <Link to={'/videos'}>Videos</Link>
            </li>
            <li>
              <Link to={'/contactus'}>Contactus</Link>
            </li>
          </ul>
     
    </Box>
  )
  return (
    <Box>
      <AppBar component={"nav"} sx={{bgcolor:'black'}}>
        <Toolbar>
          <IconButton  
          color='inherit'
          aria-label='open drawer'
          edge="s
          tart"
          sx={{mr:2,
          display:{sm:"none"},
         
          }}
          onClick={handleDrawerToggle}
          >
            <MenuIcon/>
            </IconButton>
        <Typography color={"goldenrod"} varient="h6" component="div" sx={{flexGrow:1}}>
          <DesignServicesIcon/>
          chand our tara
          {/* <img src="./images/logo.jpeg" alt=''/> */}
        </Typography>
        <Box sx={{display:{xs:'none',sm:'block'}}}>
          <ul className='navigation-menu'>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/worksheet'}>worksheet</Link>
            </li>
            <li>
              <Link to={'/videos'}>Videos</Link>
            </li>
            <li>
              <Link to={'/contactus'}>Contactus</Link>
            </li>
          </ul>
        </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer variant='temporary' open={mobileOpen}onClose={handleDrawerToggle}
        sx={{display:{xs:'block',sm:'none'},
      "& .MuiDrawer-Paper":{
        boxSizing:'border-box',
        width:'240px',
      } ,
      }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box >
      <Toolbar/>

      </Box>
      
    </Box>
  )
}

export default Header