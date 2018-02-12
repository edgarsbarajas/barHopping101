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
    if(!this.state.loading){
      return(
        <div className='searchResults'>
          { this.props.events.map((event, index) => {
              return(
                <Event key={index} {...event}/>
              )
          })}
        </div>
      )
    }else{
      return(
        <RingLoader
              color={'#123abc'}
              loading={true}
            />
      )
    }
  }

}

export default SearchResults;
