
import "../../Styles/styles.css";
import React, { Component } from "react";
import Products from "./Products";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HaroofEtahajipicturedata from '../../cardsData/DetailPages/MatchingPicturesdata'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from 'react-router-dom'
import ArrowBack from '@mui/icons-material/ArrowBack';

function MatchingPictureSec() {
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
//   const Product= HaroofEtahajipicturedata.map(item=>(
// <Products imgsrc={item.imgsrc} path={item.path} />
//   ))

  return (
   
       
    <div className='Imagelist'>
       <Link to ='/worksheet'>
       <button><ArrowBack/></button>
      </Link>
      <div className='cards-row' >
{HaroofEtahajipicturedata.map((item) => (
     
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
export default MatchingPictureSec;
