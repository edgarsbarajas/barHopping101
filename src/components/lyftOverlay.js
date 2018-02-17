import React from 'react'
import axios from 'axios'
import '../styles/lyftOverlay.css'

class LyftOverlay extends React.Component{
    constructor(props){
      super(props);
      console.log("LYFT !!!!", props);

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
        console.log(nextProps.venueCoordinates.longitude, nextProps.venueCoordinates.latitude);
        // this.setState({
        //   venue: {longitude: nextProps.venueCoordinates.longitude, latitude: nextProps.venueCoordinates.latitude},
        // })

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

    // getHumanLocation = () => {
    //   console.log("click");
    //   let humanCoordinates = {}
    //   // first, test for feature support
    //   if('geolocation' in navigator){
    //     // geolocation is supported :)
    //     requestLocation();
    //   }else{
    //     // no geolocation :(
    //     console.log("Sorry, looks like your browser doesn't support geolocation")
    //   }
    //
    //   // requestLocation() returns a message, either the users coordinates, or an error message
    //   function requestLocation(){
    //     console.log("request location");
    //     var options = {
    //       // enableHighAccuracy = should the device take extra time or power to return a really accurate result, or should it give you the quick (but less accurate) answer?
    //       enableHighAccuracy: false,
    //       // timeout = how long does the device have, in milliseconds to return a result?
    //       timeout: 5000,
    //       // maximumAge = maximum age for a possible previously-cached position. 0 = must return the current position, not a prior cached position
    //       maximumAge: 0
    //     };
    //
    //     // call getCurrentPosition()
    //     navigator.geolocation.getCurrentPosition(this.success, error, options).bind(this)};
    //
    //     // upon success, do this
    //      const success = (pos) => {
    //        console.log("human tracking success")
    //       // get longitude and latitude from the position object passed in
    //       // console.log("HUMAN LONGITUDE", pos.coords.longitude)
    //       console.log({longitude: pos.coords.longitude, latitude: pos.coords.latitude})
    //       this.setState({haveHumanLocation: true})
    //     }
    //
    //     // upon error, do this
    //     function error(err){
    //       // return the error message
    //       console.log('Error: ' + err + ' :(')
    //     }
    //   } // end requestLocation();
    //  // end getHumanLocation()

    closeOverlay(event){
      this.setState({showLyft: false})
    }

    renderLyfts(){
      if(this.state.availableLyfts.length > 0){
        return(
          this.state.availableLyfts.map((lyft, index) => {
            return(
              <div className='lyft' key={index}>
                <div className='rideType'>{lyft.ride_type}...</div>
                <div className='estimatedCost'>${(lyft.estimated_cost_cents_min)/100}</div>
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
