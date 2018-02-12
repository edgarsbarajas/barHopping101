import React from 'react'
import Event from './event'
import '../styles/searchResults.css'
import { RingLoader } from 'react-spinners';

class SearchResults extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      loading: this.props.loading
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loading !== this.state.loading) {
      this.setState({ loading: nextProps.loading });
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
                <Event key={index} {...event}/>
              )
          })}
        </div>
      )


  }

}

export default SearchResults;
