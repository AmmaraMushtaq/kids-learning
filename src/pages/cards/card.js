import React,{useState} from 'react'
import {Button} from '@mui/material'
import { Link } from 'react-router-dom'
import '../../Styles/card.css'


import homeCardData from '../../cardsData/homeCardData'
import  TracingData from '../../cardsData/DetailPages/TracingData'
import  ActivityData from '../../cardsData/DetailPages/ActivityData'
import  RoadsActivityData from '../../cardsData/DetailPages/RoadsActivityData'
import WritingData from '../../cardsData/DetailPages/WritingData'

import GrammerData from '../../cardsData/DetailPages/GrammerData'
import haroofETahajiColoringPagesaData from '../../cardsData/HaroofETahajiColoringPagesaData'
import HaroofEtahajiTarteeb from '../../cardsData/DetailPages/HaroofEtahajiTarteeb'
import HaroofETahajiPictureData  from '../../cardsData/DetailPages/MatchingPicturesdata'
import HaroofEtahajipicturedata from '../../cardsData/DetailPages/MatchingPicturesdata'
import similarHaroofActivitySheetsData  from '../../cardsData/DetailPages/similarHaroofActivitySheetsData'
import haroofETahajiColoringPagesaDataB from '../../cardsData/DetailPages/ColoringPagesB'

const CardHroof = (props) => {

    const detail = () => {
        return (
            <>
        <CardHroof details={homeCardData}/>
        <CardHroof details={HaroofEtahajiTarteeb}/>
        <CardHroof details={HaroofEtahajipicturedata}/>
        <CardHroof details={similarHaroofActivitySheetsData}/>
        <CardHroof details={ HaroofETahajiPictureData}/>
        <CardHroof details={TracingData}/>
        <CardHroof details={ActivityData}/>
        <CardHroof details={GrammerData}/>
        <CardHroof details={haroofETahajiColoringPagesaData}/>
        <CardHroof details={RoadsActivityData}/>
        <CardHroof details={WritingData}/>
        <CardHroof details={haroofETahajiColoringPagesaDataB}/>



            </>
          )
        }
   
     
  return (
    <>
    <div className='cards' >
         {props.details.map((value,index)=>(
        <div className='card'key={index} >
          <div className='detail' >
          
       <div className='card-img'>
        <div>
        <Link to={value.path} target="_blank">
      <img src={value.imgsrc} />
      </Link>
      </div>

      </div>
      </div>
      <div className='descripation' >
        <h5>{value.h4}</h5>
        <p>{value.descripation}</p>
      
      
      <Button>
     
        <Link to={value.path} target="_blank">Learn More  {}
      </Link>
     
      </Button> 
     
      </div>
      
      </div>
  ))}
  </div>
    </>
  
  )
}

export default CardHroof