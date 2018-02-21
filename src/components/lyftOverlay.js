import React from 'react'
import axios from 'axios'
import '../styles/lyftOverlay.css'

class LyftOverlay extends React.Component{
    constructor(props){
      super(props);

      this.state = {
        showLyft: props.showLyft,
        haveHumanLocation: false,
        humanLocation: {},
        availableLyfts: []
      }
    }

    componentWillReceiveProps = (nextProps) => {
      console.log("NEXT PROPS", nextProps);
      if(nextProps.venueCoordinates !== this.props.venueCoordinates) {
        this.getLyftCosts(nextProps.venueCoordinates)
      }

      if(nextProps.showLyft !== this.state.showLyft){
        this.setState({showLyft: nextProps.showLyft})
      }
    }

    getLyftCosts(venueCoordinates){
        axios.post('https://barhopping101-backend.herokuapp.com/api/lyft', {
            venueCoordinates: venueCoordinates,
            humanCoordinates: {longitude: this.props.userLocation.long, latitude: this.props.userLocation.lat}
        })
        .then((response) => {
          this.setState({availableLyfts: response.data})
          console.log("*response****", response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    closeOverlay(event){
      this.setState({showLyft: false})
    }

    renderNumberOfSeats(rideType){
      if(rideType === 'lyft'){
        return '4 seats'
      }else if(rideType === 'lyft_line'){
        return '1-2 seats, shared'
      }
    }

    renderRideTypes(rideType){
      if(rideType === 'lyft'){
        return "Lyft"
      }else if(rideType === 'lyft_line'){
        return 'Line'
      }
    }

    renderLyfts(){
      let rideType = ""
      if(this.state.availableLyfts.length > 0){
        return(
          this.state.availableLyfts.map((lyft, index) => {
            rideType = lyft.ride_type
            return(
              <div className='lyft' key={index}>
                <div className='rideTypeWrapper'>
                  <img src={`${rideType}.png`} alt={rideType}/>
                  <div className='rideTypeDetails'>
                    <div className='rideType'>{this.renderRideTypes(rideType)}</div>
                    <div className='numberOfSeats'>{this.renderNumberOfSeats(rideType)}</div>
                  </div>
                </div>
                <div className='estimatedCost'>
                  ${((lyft.estimated_cost_cents_min)/100).toFixed(2)}
                </div>
              </div>
            )
          })
        )
      }else{
        return(
          <div className='noLyfts'>
            NO DRIVERS AVAILABLE
          </div>
        )
      }
    }

    render(){
      if(this.state.showLyft){
        return(
          <div className='lyftOverlay'>
            <img src='/lyft-overlay.png' alt='lyft-logo' />
            <div className='heading'>
              <span className='firstLine'>ESTIMATES</span>
              <span className='secondLine'>FROM YOUR LOCATION</span>
            </div>
            {this.renderLyfts()}
            <button onClick={(e) => {this.closeOverlay(e)}}>Close</button>
          </div>
        )
      }else{
        return null;
      }
    }

}

export default LyftOverlay;
