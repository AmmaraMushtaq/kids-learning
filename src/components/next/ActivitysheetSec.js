
import "../../Styles/styles.css";
import React, { Component } from "react";


import ActivityData from '../../cardsData/DetailPages/ActivityData'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from 'react-router-dom'
import ArrowBack from '@mui/icons-material/ArrowBack';

function ActivitysheetSec
() {
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
//   const Product= ActivityData.map(item=>(
// <Products imgsrc={item.imgsrc} path={item.path} />
//   ))

  return (
   
        <div className='Imagelist'>
           <Link to ='/worksheet'>
           <button><ArrowBack/></button>
      </Link>
             <ImageList sx={{ width: '95%', height: '50%' }} cols={4} rowHeight={380} >
      {ActivityData.map((item) => (
        <ImageListItem key={item.imgsrc} responsive={responsive}>
          <Link to={item.path} target="_blank">
          <img
            src={item.imgsrc} width="100%" height='75%'
            // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            // alt={item.title}
             loading="lazy"
          /></Link>
        </ImageListItem>
      ))}
    </ImageList>
          {/* <Carousel responsive={responsive}> */}
         
    {/* {Product} */}
{/* </Carousel>;// */}
      </div>
    );
  }
export default ActivitysheetSec
;
