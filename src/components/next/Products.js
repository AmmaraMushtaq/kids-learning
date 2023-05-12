import React,{useState} from 'react'
import { Link } from 'react-router-dom'
//  import '../../Styles/Products.css'
const Products = (props) => {

  return (
    <>
     <div>
  <div className='card-main'style={{marginTop:'20%',marginLeft:'20%'}} >
  <div className='card-1' style={{marginTop:'30%'}} >
  <Link to={props.path} target="_blank">
  
    {props.id}
    {/* <img src={props.imgsrc} width='60%' height='60%' alt='produt img'/>/ */}

    </Link>
  </div>
  </div>
  </div>

  </>
  )
}

export default Products