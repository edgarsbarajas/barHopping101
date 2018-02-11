import React from 'react'
import '../styles/messagingOverlay.css'

const MessagingOverlay = (props) => {
    return(
      <div className='messagingOverlay' style={{display: props.showMessaging === true ? "block" : "none" }}>
        <form>
          <input type='text' className='firstRow' placeholder='(415)555-1234'/>
          <input type='text' className='firstRow' placeholder='Your name'/>
          <textarea rows="4" cols="50"/>
          <input type='submit' value='SEND'/>
        </form>
      </div>
    )

}

export default MessagingOverlay;
