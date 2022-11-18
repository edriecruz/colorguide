import React from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaypal } from '@fortawesome/free-brands-svg-icons'

const Support = () => {
  return (
    <div className='footer'>
        
        <a href='https://paypal.me/edriecruz?country.x=PH&locale.x=en_US'>
        <p>
        Support the Developer
        </p>
            <FontAwesomeIcon icon={faPaypal} size="2xl" 
        style={{
            "transition": "ease .2s",
            "margin-bottom": "20px"
        }}/></a>
        
    </div>
  )
}

export default Support