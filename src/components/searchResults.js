import React from 'react'
import Event from './event'
import '../styles/searchResults.css'
import { RingLoader } from 'react-spinners';

class SearchResults extends React.Component{
  constructor(props){
    super(props);
    console.log("SR Props!!!", props);
    this.state = {
      loading: this.props.loading,
      userLocation: this.props.userLocation
    }

    console.log(this.state);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loading !== this.state.loading) {
      this.setState({ loading: nextProps.loading });
    }

    if(nextProps.userLocation !== this.state.userLocation){
      console.log(nextProps);
      this.setState({ userLocation: nextProps.userLocation });
    }
  }

  render(){
      return(
        <div className='searchResults'>
          <RingLoader
              color={'#f6682F'}
              loading={this.state.loading}
            />
          { this.props.events.map((event, index) => {
              return(
                <Event key={index} {...event} userLocation={this.state.userLocation}/>
              )
          })}
        </div>
      )


  }

}

export default SearchResults;
