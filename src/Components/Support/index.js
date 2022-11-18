import React from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaypal } from '@fortawesome/free-brands-svg-icons'

const Support = () => {
  return (
    <div className='footer'>
        
        <a href='https://paypal.me/edriecruz?country.x=PH&locale.x=en_US'>
            <FontAwesomeIcon icon={faPaypal} size="2xl" className='paypal'/>
        </a>
    </div>
  )
}

export default Support