import React from 'react'
import '../styles/messagingOverlay.css'

class MessagingOverlay extends React.Component{
    constructor(props){
      super(props);

      this.state = {
        showMessaging: props.showMessaging
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.showMessaging !== this.state.showMessaging) {
        this.setState({ showMessaging: nextProps.showMessaging });
      }
    }

    handleClick(event){
      event.preventDefault()

      this.setState({showMessaging: false})
    }

    render(){
      {
        if(this.state.showMessaging){
          return(
            <div className='messagingOverlay'>
              <form>
                <input type='text' className='firstRow' placeholder='(415)555-1234'/>
                <input type='text' className='firstRow' placeholder='Your name'/>
                <textarea rows="4" cols="50"/>
                <button onClick={e => {this.handleClick(e)}}>CANCEL</button>
                <input type='submit' value='SEND'/>
              </form>
            </div>
          )
        } else {
          return null
        }
      }
    }
}

export default MessagingOverlay;
