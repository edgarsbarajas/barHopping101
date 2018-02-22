import React from 'react'
import axios from 'axios'
import '../styles/searchBar.css'

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    console.log(props);

    this.state = {
      searchValue: "",
      startDateKeyword: ""
    }
  }

  handleInputChange(event){
    this.setState({ searchValue: event.target.value })
  }

  handleSelectChange(event){
    this.setState({ startDateKeyword: event.target.value })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.setLoading()
    this.props.clearEvents()

    axios.get('https://barhopping101-backend.herokuapp.com/api/eventbrite', {
      params: {
        city: this.state.searchValue,
        start: this.state.startDateKeyword
       }
    })
    .then((response) => {
      console.log(response.data);
      console.log(this.props.setEvents(response.data))
    })
    .catch(function (error) {
      console.log(error);
    });

    console.log(this.state.searchValue)
  }

  render(){
    return(
      <form className='searchBar' onSubmit={e => {this.handleSubmit(e)}}>
        <input type='text'
          value={this.state.searchValue}
          onChange={e => this.handleInputChange(e)}
          placeholder='Search city'/>
        <select onChange={(e) => {this.handleSelectChange(e)}}>
          <option value="all dates">All Dates &#8675;</option>
          <option value="today">Today</option>
          <option value="tomorrow">Tomorrow</option>
          <option value="this_week">This Week</option>
          <option value="this_weekend">This Weekend</option>
          <option value="next_week">Next Week</option>
          <option value="this_month">This Month</option>
          <option value="next_month">Next Month</option>
        </select>
        <input type='submit' defaultValue='SEARCH'/>
      </form>
    )
  }
}

export default SearchBar;
