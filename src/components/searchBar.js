import React from 'react'
import axios from 'axios'
import '../styles/searchBar.css'

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    console.log(props);

    this.state = {
      searchValue: ""
    }
  }

  handleChange(event){
    this.setState({ searchValue: event.target.value })
  }

  handleSubmit(event){
    event.preventDefault()

    // const response = [{"name":{"text":"The Hip Hop Bar Crawl","html":"The Hip Hop Bar Crawl"},"description":{"text":"The Hip Hop Bar Crawl\n* TICKET PRICES WILL GO UP *\n* WHAT YOU GET *\nBe a part of the Best Bar Crawl of the year!\nFREE cover at all partner venues\nProfessional photographers throughout the event\nContest \u0026 Prizes!\nMORE COMING SOON!\n* OUR VENUES \u0026 LOCATIONS *\n...venues will be posted soon!\n* MORE LOCATION TO COME *","html":"\u003cH2\u003eThe Hip Hop Bar Crawl\u003c/H2\u003e\n\u003cH2\u003e* TICKET PRICES WILL GO UP *\u003c/H2\u003e\n\u003cH2\u003e* WHAT YOU GET *\u003c/H2\u003e\n\u003cH2\u003eBe a part of the Best Bar Crawl of the year!\u003c/H2\u003e\n\u003cH2\u003eFREE cover at all partner venues\u003c/H2\u003e\n\u003cH2\u003eProfessional photographers throughout the event\u003c/H2\u003e\n\u003cH2\u003eContest \u0026amp; Prizes!\u003c/H2\u003e\n\u003cH2\u003eMORE COMING SOON!\u003c/H2\u003e\n\u003cH2\u003e* OUR VENUES \u0026amp; LOCATIONS *\u003c/H2\u003e\n\u003cH2\u003e...venues will be posted soon!\u003c/H2\u003e\n\u003cH2\u003e* MORE LOCATION TO COME *\u003c/H2\u003e"},"id":"41529300255","url":"https://www.eventbrite.com/e/the-hip-hop-bar-crawl-tickets-41529300255?aff=ebapi","start":{"timezone":"America/Chicago","local":"2018-05-27T18:00:00","utc":"2018-05-27T23:00:00Z"},"end":{"timezone":"America/Chicago","local":"2018-05-28T02:00:00","utc":"2018-05-28T07:00:00Z"},"created":"2017-12-22T21:11:33Z","changed":"2018-02-01T00:16:53Z","capacity":2000,"capacity_is_custom":true,"status":"live","currency":"USD","listed":true,"shareable":true,"online_event":false,"tx_time_limit":480,"hide_start_date":false,"hide_end_date":false,"locale":"en_US","is_locked":false,"privacy_setting":"unlocked","is_series":false,"is_series_parent":false,"is_reserved_seating":false,"source":"create_2.0","is_free":false,"version":"3.0.0","logo_id":"40283749","organizer_id":"15739855094","venue_id":"22590215","category_id":"113","subcategory_id":"13003","format_id":"11","resource_uri":"https://www.eventbriteapi.com/v3/events/41529300255/","logo":{"crop_mask":{"top_left":{"x":0,"y":20},"width":1920,"height":960},"original":{"url":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F40283749%2F235275390377%2F1%2Foriginal.jpg?s=0df354ca9c3dd8a1ba86ed13a3a400aa","width":1920,"height":1000},"id":"40283749","url":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F40283749%2F235275390377%2F1%2Foriginal.jpg?h=200\u0026w=450\u0026rect=0%2C20%2C1920%2C960\u0026s=0526cb52125ceedebc015c249ab21038","aspect_ratio":"2","edge_color":"#f2e1c2","edge_color_set":true}},{"name":{"text":"Killjoy Bar Hop","html":"Killjoy Bar Hop"},"description":{"text":null,"html":"\u003cP\u003e\u003cBR\u003e\u003c/P\u003e"},"id":"41619886200","url":"https://www.eventbrite.com/e/killjoy-bar-hop-tickets-41619886200?aff=ebapi","start":{"timezone":"America/Phoenix","local":"2018-04-21T18:00:00","utc":"2018-04-22T01:00:00Z"},"end":{"timezone":"America/Phoenix","local":"2018-04-22T03:00:00","utc":"2018-04-22T10:00:00Z"},"created":"2017-12-29T05:29:31Z","changed":"2017-12-29T05:32:44Z","capacity":300,"capacity_is_custom":true,"status":"live","currency":"USD","listed":true,"shareable":true,"online_event":false,"tx_time_limit":480,"hide_start_date":false,"hide_end_date":false,"locale":"en_US","is_locked":false,"privacy_setting":"unlocked","is_series":false,"is_series_parent":false,"is_reserved_seating":false,"source":"create_2.0","is_free":true,"version":"3.0.0","logo_id":"39046952","organizer_id":"16228377983","venue_id":"22621420","category_id":"199","subcategory_id":null,"format_id":"2","resource_uri":"https://www.eventbriteapi.com/v3/events/41619886200/","logo":{"crop_mask":{"top_left":{"x":0,"y":4},"width":300,"height":150},"original":{"url":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F39046952%2F239559549023%2F1%2Foriginal.jpg?s=183e353512d247770095100c02e93038","width":300,"height":182},"id":"39046952","url":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F39046952%2F239559549023%2F1%2Foriginal.jpg?h=200\u0026w=450\u0026rect=0%2C4%2C300%2C150\u0026s=666b038f376c48e116c3d1870122a772","aspect_ratio":"2","edge_color":"#ffffff","edge_color_set":true}},{"name":{"text":"The Hip Hop Bar Crawl","html":"The Hip Hop Bar Crawl"},"description":{"text":"The Hip Hop Bar Crawl\n* TICKET PRICES WILL GO UP *\n* WHAT YOU GET *\nBe a part of the Best Bar Crawl of the year!\nFREE cover at all partner venues\nProfessional photographers throughout the event\nContest \u0026 Prizes!\nMORE COMING SOON!\n* OUR VENUES \u0026 LOCATIONS *\n...venues will be posted soon!\n* MORE LOCATION TO COME *","html":"\u003cH2\u003eThe Hip Hop Bar Crawl\u003c/H2\u003e\n\u003cH2\u003e* TICKET PRICES WILL GO UP *\u003c/H2\u003e\n\u003cH2\u003e* WHAT YOU GET *\u003c/H2\u003e\n\u003cH2\u003eBe a part of the Best Bar Crawl of the year!\u003c/H2\u003e\n\u003cH2\u003eFREE cover at all partner venues\u003c/H2\u003e\n\u003cH2\u003eProfessional photographers throughout the event\u003c/H2\u003e\n\u003cH2\u003eContest \u0026amp; Prizes!\u003c/H2\u003e\n\u003cH2\u003eMORE COMING SOON!\u003c/H2\u003e\n\u003cH2\u003e* OUR VENUES \u0026amp; LOCATIONS *\u003c/H2\u003e\n\u003cH2\u003e...venues will be posted soon!\u003c/H2\u003e\n\u003cH2\u003e* MORE LOCATION TO COME *\u003c/H2\u003e"},"id":"41529300255","url":"https://www.eventbrite.com/e/the-hip-hop-bar-crawl-tickets-41529300255?aff=ebapi","start":{"timezone":"America/Chicago","local":"2018-05-27T18:00:00","utc":"2018-05-27T23:00:00Z"},"end":{"timezone":"America/Chicago","local":"2018-05-28T02:00:00","utc":"2018-05-28T07:00:00Z"},"created":"2017-12-22T21:11:33Z","changed":"2018-02-01T00:16:53Z","capacity":2000,"capacity_is_custom":true,"status":"live","currency":"USD","listed":true,"shareable":true,"online_event":false,"tx_time_limit":480,"hide_start_date":false,"hide_end_date":false,"locale":"en_US","is_locked":false,"privacy_setting":"unlocked","is_series":false,"is_series_parent":false,"is_reserved_seating":false,"source":"create_2.0","is_free":false,"version":"3.0.0","logo_id":"40283749","organizer_id":"15739855094","venue_id":"22590215","category_id":"113","subcategory_id":"13003","format_id":"11","resource_uri":"https://www.eventbriteapi.com/v3/events/41529300255/","logo":{"crop_mask":{"top_left":{"x":0,"y":20},"width":1920,"height":960},"original":{"url":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F40283749%2F235275390377%2F1%2Foriginal.jpg?s=0df354ca9c3dd8a1ba86ed13a3a400aa","width":1920,"height":1000},"id":"40283749","url":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F40283749%2F235275390377%2F1%2Foriginal.jpg?h=200\u0026w=450\u0026rect=0%2C20%2C1920%2C960\u0026s=0526cb52125ceedebc015c249ab21038","aspect_ratio":"2","edge_color":"#f2e1c2","edge_color_set":true}},{"name":{"text":"Killjoy Bar Hop","html":"Killjoy Bar Hop"},"description":{"text":null,"html":"\u003cP\u003e\u003cBR\u003e\u003c/P\u003e"},"id":"41619886200","url":"https://www.eventbrite.com/e/killjoy-bar-hop-tickets-41619886200?aff=ebapi","start":{"timezone":"America/Phoenix","local":"2018-04-21T18:00:00","utc":"2018-04-22T01:00:00Z"},"end":{"timezone":"America/Phoenix","local":"2018-04-22T03:00:00","utc":"2018-04-22T10:00:00Z"},"created":"2017-12-29T05:29:31Z","changed":"2017-12-29T05:32:44Z","capacity":300,"capacity_is_custom":true,"status":"live","currency":"USD","listed":true,"shareable":true,"online_event":false,"tx_time_limit":480,"hide_start_date":false,"hide_end_date":false,"locale":"en_US","is_locked":false,"privacy_setting":"unlocked","is_series":false,"is_series_parent":false,"is_reserved_seating":false,"source":"create_2.0","is_free":true,"version":"3.0.0","logo_id":"39046952","organizer_id":"16228377983","venue_id":"22621420","category_id":"199","subcategory_id":null,"format_id":"2","resource_uri":"https://www.eventbriteapi.com/v3/events/41619886200/","logo":{"crop_mask":{"top_left":{"x":0,"y":4},"width":300,"height":150},"original":{"url":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F39046952%2F239559549023%2F1%2Foriginal.jpg?s=183e353512d247770095100c02e93038","width":300,"height":182},"id":"39046952","url":"https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F39046952%2F239559549023%2F1%2Foriginal.jpg?h=200\u0026w=450\u0026rect=0%2C4%2C300%2C150\u0026s=666b038f376c48e116c3d1870122a772","aspect_ratio":"2","edge_color":"#ffffff","edge_color_set":true}}]

    // this.props.setEvents(response)
    axios.get('http://localhost:3001/api/eventbrite')
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
          onChange={e => this.handleChange(e)}
          placeholder='Search city'/>
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
