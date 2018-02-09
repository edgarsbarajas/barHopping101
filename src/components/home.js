import React from 'react'
import SearchBar from './searchBar'
import '../styles/home.css'

class Home extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return(
      <div className='home'>
        <h1>Find your next bar hop</h1>
        <SearchBar/>
        <div className='powered-by'>
          <span>powered by</span>
          <img src='eventbrite.png' alt='eventbrite-logo'/>
        </div>
      </div>
    )
  }
}

export default Home;
