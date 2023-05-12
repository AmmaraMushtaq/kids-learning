import React,{useState} from 'react'
import CrossIcon from '@mui/icons-material/WhatsApp';
import '../Styles/Popup.css'
const Popup = (props) => {
  
  return(props.trigger)? (
    <>
    <div className='popup'>
       
        <div>
          
            <div className='main'>
               
                    <div className='popup-inner'>
                  <button className='close-btn' onClick={()=>props.setTrigger(false)}>close</button>
                      {props.children}
                   
                </div>
            </div>
        </div>
    </div>
    </>
  ):''

  }
export default Popup