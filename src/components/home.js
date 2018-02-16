import React from 'react'
import SearchBar from './searchBar'
import SearchResults from './searchResults'
import axios from 'axios'
import '../styles/home.css'

class Home extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      events: [],
      loading: false,
      userLocation: {}
    }

    console.log("state:", this.state);
  }

  componentDidMount(){
  console.log("mapppsssssss");
  axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.GOOGLE_MAPS_KEY}`)
  .then(response => {
    console.log("google maps");
    console.log("YOYOYO", response)
    console.log(response.data.location);
    this.setState({ userLocation: {lat: response.data.location.lat, long: response.data.location.lng}})
    })
    .catch(error => {
      console.log(error);
    });
}


  render(){
    return(
      <div className='home'>
        <h1>Find your next bar hop</h1>
        <SearchBar
          setEvents={(events) => {this.setState({events: events, loading: false})}}
          setLoading={() => {this.setState({loading: true})}}
          clearEvents={() => {this.setState({events: []})}}/>
        <div className='powered-by'>
          <span>powered by</span>
          <img src='eventbrite.png' alt='eventbrite-logo'/>
        </div>
        <SearchResults events={this.state.events} loading={this.state.loading} userLocation={this.state.userLocation}/>
      </div>
    )
  }
}

export default Home;
