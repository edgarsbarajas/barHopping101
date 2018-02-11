import React from 'react'
import axios from 'axios'
import '../styles/messagingOverlay.css'

class MessagingOverlay extends React.Component{
    constructor(props){
      super(props);

      this.state = {
        showMessaging: props.showMessaging,
        phoneNumber: "",
        humanName: "",
        body: `Check out this event!\n\n${this.props.eventURL}\n\n -`
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

    handleBodyChange(event){
      this.setState({body: event.target.value})
    }

    handleNameChange(event){
      this.setState({humanName: event.target.value})
    }

    handlePhoneNumberChange(event){
      this.setState({phoneNumber: event.target.value})
    }

    handleSubmit(event){
      event.preventDefault()

      axios.get('http://localhost:3001/api/twilio', {
        params: {
          messageBody: this.state.body,
          phoneNumber: this.state.phoneNumber,
          humanName: this.state.humanName
         }
      })
      .then((response) => {
        console.log(response.data);
        console.log(this.props.setEvents(response.data))
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    render(){
      {
        if(this.state.showMessaging){
          return(
            <div className='messagingOverlay'>
              <form onSubmit={e => {this.handleSubmit(e)}}>
                <input type='text'
                  className='firstRow'
                  placeholder='(415)555-1234'
                  onChange={e => {this.handlePhoneNumberChange(e)}}/>
                <input type='text'
                  className='firstRow'
                  placeholder='Your name'
                  onChange={e => {this.handleNameChange(e)}}/>
                <textarea
                  rows="4"
                  cols="50"
                  value={this.state.body + this.state.humanName}
                  onChange={e => {this.handleBodyChange(e)}}/>
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
