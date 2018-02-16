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
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({userLocation: {
        lat: position.coords.latitude,
        long: position.coords.longitude
      }})
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
