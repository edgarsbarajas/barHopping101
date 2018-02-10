import React from 'react'
import Event from './event'
import '../styles/searchResults.css'

const SearchResults = ({events}) => {
  return(
    <div className='searchResults'>
      { events.map((event, index) => {
          return(
            <Event key={index} {...event}/>
          )
      })}
    </div>
  )
}

export default SearchResults;
