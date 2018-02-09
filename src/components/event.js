import React from 'react'
import '../styles/event.css'

const Event = (props) => {
  console.log(props.is_free)
  let priceLabel = "FREE"
  if(!props.is_free){
    priceLabel = "$"
  }

  return(
    <div className='event'>
      <img src={props.logo.url} alt='event-logo' className='eventLogo' />
      <span className="price">{priceLabel}</span>
    </div>
  )
}

export default Event;
