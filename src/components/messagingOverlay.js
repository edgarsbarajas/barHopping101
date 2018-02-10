import React from 'react'
import '../styles/messagingOverlay.css'

class MessagingOverlay extends React.Component{
  render(){
    return(
      <div className='messagingOverlay'>
        <form>
          <input type='text' className='firstRow' placeholder='(415)555-1234'/>
          <input type='text' className='firstRow' placeholder='Your name'/>
          <textarea rows="4" cols="50"/>
          <input type='submit' value='SEND'/>
        </form>
      </div>
    )
  }
}

export default MessagingOverlay;
