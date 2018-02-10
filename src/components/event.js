import React from 'react'
import '../styles/event.css'

const Event = (props) => {
  console.log(props)
  let priceLabel = "FREE"
  if(!props.is_free){
    priceLabel = "$"
  }

  return(
    <div className='event'>
      <img src={props.logo.url} alt='event-logo' className='eventLogo' />
      <span className="price">{priceLabel}</span>
      <div className='details'>
        <div className='time'>
          {new Date(props.start.local).toLocaleString()}
        </div>
        <div className='title'>
          {props.name.text}
        </div>
        <div className='moreInfo'>
          <a href={props.url}>More Info</a>
        </div>
      </div>
    </div>
  )
}

export default Event;
