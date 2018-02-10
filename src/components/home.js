import React from 'react'
import SearchBar from './searchBar'
import SearchResults from './searchResults'
import '../styles/home.css'

class Home extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      events: []
    }

    console.log("state:", this.state);
  }

  render(){
    return(
      <div className='home'>
        <h1>Find your next bar hop</h1>
        <SearchBar setEvents={(events) => {this.setState({events: events})}}/>
        <div className='powered-by'>
          <span>powered by</span>
          <img src='eventbrite.png' alt='eventbrite-logo'/>
        </div>
        <SearchResults events={this.state.events}/>
      </div>
    )
  }
}

export default Home;
