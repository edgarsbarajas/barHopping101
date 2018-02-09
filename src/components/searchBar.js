import React from 'react'
import '../styles/searchBar.css'

class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){
    return(
      <form className='searchBar'>
        <input type='text' placeholder='Search city'/>
        <select>
          <option value="all dates">All Dates &#8675;</option>
          <option value="today">Tomorrow</option>
          <option value="this week">This Week</option>
          <option value="this weekend">This Weekend</option>
          <option value="next week">Next Month</option>
          <option value="next month">Next Month</option>
        </select>
        <input type='submit' defaultValue='SEARCH'/>
      </form>
    )
  }
}

export default SearchBar;
