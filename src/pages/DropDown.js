import React, { useState } from 'react'
import {AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography} from '@mui/material'
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { Link } from 'react-router-dom';
import '../Styles/drop.css'
import MenuIcon from '@mui/icons-material/Menu';
const DropDown = () => {
  const [mobileOpen,setMobileOpen]=useState(false)
  //handle menu click
  const handleDrawerToggle=()=>{
    setMobileOpen(!mobileOpen)
  }
  //menu drawer
  const drawer=(
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
     
        <Divider/>
          <ul className='mobile-navigation'>
          <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/urdu'}>Urdu</Link>
            </li>
            <li>
              <Link to={'/coloring Pages'}>coloring Pages</Link>
            </li>
           
           
            <li>
              <Link to={'/flashCards'}>flashCards</Link>
            </li>
            <li>
              <Link to={'/help'}>help</Link>
            </li>
          </ul>
     
    </Box>
  )
  return (
    <>
      
        <Toolbar>
          <IconButton  
          color='inherit'
          aria-label='open drawer'
          edge="start"
         
          sx={{mr:1,
          display:{sm:"none"},
         
          }}
          onClick={handleDrawerToggle}
          >
            <MenuIcon/>
            </IconButton>
        <div className='drop'>
        <Box
         sx={{display:{xs:'none',sm:'block'},justifyContent:'center',alignItems:'center',backgroundColor:'#dcdda4'
         }}>
          <ul className='navigation-menu1'>
            {/* <li>
              <Link to={'/'}>Home+</Link>
          
            </li> */}
            <li>
              <Link to={'/urdu'}>Urdu</Link>
{/*               
                <ul>
              <li>Rainbow tracing </li>
              <li>coloring pictures </li>
              <li>pictures matching
                <ul>
                    <li> more</li>
                </ul>
              </li>
              </ul> */}
            </li>
            {/* <li>
              <Link to={'/coloring Pages'}>coloring Pages</Link>
            </li>*/}
            <li>
              <Link to={'/flashCards'}>Shop</Link>
            </li> 
            <li>
              <Link to={'/help'}>help</Link>
            </li>
        
          </ul>
         
        </Box>
        </div>
        </Toolbar>
     
      <Box >
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
      {/* <Box >
      <Toolbar/>

      </Box> */}
      
    </>
  )
}

export default DropDown