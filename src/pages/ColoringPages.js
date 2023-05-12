import React from 'react'
import Top from './Top'
import { Container} from '@mui/material'

import { Link } from 'react-router-dom'
import '../Styles/coloringpages.css'
import CardHomeData1 from '../cardsData/DetailPages/homeCardData1'
import CardHroof from '../pages/cards/card'
const ColoringPages = ({children}) => {
  return (
    <Container maxWidth='lg' style={{ backgroundColor: '#9ebcbc', paddingTop: '0px' }}>
    <Top/>
        <div>{children}</div>
        <div className='list1'>
            <ul>
              <li ><Link to={'/activitySheet'} target="_blank">Colouring-Sheets </Link></li>
              {/* <li><Link to={'/dottracing'} target="_blank">Dottracing</Link></li> */}
              <li><Link to={'/writing'} target="_blank"> Colourd-pages</Link></li>
              <li><Link to={'/rainbowWriting'} target="_blank">Rainbow-writing </Link></li>
              {/* <li><Link to={'/roadsActivity'} target="_blank">roads-activity  </Link></li> */}
              {/* <li><Link to={'/confusingLetters'} target="_blank">confusing-letters </Link></li> */}
              <li><Link to={'/matchingSounds'} target="_blank"> Matching-sounds-with-colour </Link></li>
              <li><Link to={'/matchingPictures'}target="_blank"> Matching-colourful-pictures </Link></li>
              <li><Link to={'/picturesWithHaroof'} target="_blank"> pictures-with-haroof </Link></li>
              {/* <li><Link to={'/reOrderHaroof'} target="_blank"> re-order-haroof  </Link></li> */}
              <li><Link to={'/missingHaroof'} target="_blank"> Missing-haroof </Link></li>
              {/* <li><Link to={'/grammer'} target="_blank"> urdu-Grammer </Link></li> */}
              <li><Link to={'/activityWorksheet'} target="_blank">Colourful-worksheet </Link></li>


            </ul>
          </div>
        
          <CardHroof details={CardHomeData1}/>
        </Container>
  )
}

export default ColoringPages