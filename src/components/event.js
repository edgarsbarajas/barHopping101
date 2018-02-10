import React from 'react'
import '../styles/event.css'

const Event = (props) => {
  console.log(props)
  let priceLabel = "FREE"
  if(!props.is_free){
    priceLabel = "$"
  }

  let logoURL = "/logoFiller.png"
  if(props.logo){
    logoURL = props.logo.url
  }

  return(
    <div className='event'>
      <img src={logoURL} alt='event-logo' className='eventLogo' />
      <span className="price">
        <img src='/lyft.png' alt='lyft' />
        <img src='/message.png' alt='message' />
        {priceLabel}
      </span>
      <div className='details'>
        <div className='time'>
          {new Date(props.start.local).toLocaleString()}
        </div>
        <div className='title'>
          {props.name.text}
        </div>
        <div className='moreInfo'>
          <a href={props.url} target="_blank">More Info</a>
        </div>
      </div>
    </div>
  )
}

export default Event;
