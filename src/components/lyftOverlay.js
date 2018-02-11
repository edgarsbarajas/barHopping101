import React from 'react'
import axios from 'axios'
import '../styles/lyftOverlay.css'

class LyftOverlay extends React.Component{
    constructor(props){
      super(props);
      console.log("LYFT", props);

      this.state = {
        showLyft: props.showLyft,
        venue: {longitude: "", latitude: ""},
        whatever: 4
      }
    }

    componentWillReceiveProps = (nextProps) => {
      console.log("NEXT PROPS", nextProps);
      if(nextProps.venueCoordinates !== this.props.venueCoordinates) {
        console.log(nextProps.venueCoordinates.longitude, nextProps.venueCoordinates.latitude);
        this.setState({
          venue: {longitude: nextProps.venueCoordinates.longitude, latitude: nextProps.venueCoordinates.latitude},
          whatever: 5
        })
      }

      if(nextProps.showLyft !== this.state.showLyft){
        this.setState({showLyft: nextProps.showLyft})
      }
    }

    getLocation(){
      console.log("click");
      // first, test for feature support
      if('geolocation' in navigator){
        // geolocation is supported :)
        requestLocation();
      }else{
        // no geolocation :(
        console.log("Sorry, looks like your browser doesn't support geolocation")
      }

      // requestLocation() returns a message, either the users coordinates, or an error message
      function requestLocation(){
        console.log("request location");
        var options = {
          // enableHighAccuracy = should the device take extra time or power to return a really accurate result, or should it give you the quick (but less accurate) answer?
          enableHighAccuracy: false,
          // timeout = how long does the device have, in milliseconds to return a result?
          timeout: 5000,
          // maximumAge = maximum age for a possible previously-cached position. 0 = must return the current position, not a prior cached position
          maximumAge: 0
        };

        // call getCurrentPosition()
        navigator.geolocation.getCurrentPosition(success, error, options);

        // upon success, do this
        function success(pos){
          // get longitude and latitude from the position object passed in
          console.log(pos.coords.longitude)
          console.log(pos.coords.latitude)
        }

        // upon error, do this
        function error(err){
          // return the error message
          console.log('Error: ' + err + ' :(')
        }
      } // end requestLocation();
    } // end getLocation()

    closeOverlay(event){
      event.preventDefault()

      this.setState({showLyft: false})
    }

    render(){
      if(this.state.showLyft){
        return(
          <div className='lyftOverlay'>
            LYFT<br/>
            latitude: {this.state.venue.latitude}<br/>
            longitude {this.state.venue.longitude} <br/>
            whatever: {this.state.whatever}

            <button onClick={(e) => {this.closeOverlay(e)}}>Close</button>
          </div>
        )
      }else{
        return null;
      }
    }

}

export default LyftOverlay;
