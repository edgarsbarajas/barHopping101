import React from 'react'
import '../styles/messagingOverlay.css'

class MessagingOverlay extends React.Component{
  render(){
    return(
      <div className='messagingOverlay'>
        <form>
          <input type='text'/>
          <input type='text'/>
          <textarea rows="4" cols="50"/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default MessagingOverlay;
