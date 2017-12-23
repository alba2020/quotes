import React, { Component } from 'react'

import SmartQuoteList from '../SmartQuoteList'
import SocialLinks from '../SocialLinks'

import QuotesWait from '../QuotesWait'
import SearchBox from '../SearchBox'

import data from '../../data.json'

class App extends Component {
  changeSearchString = e => {
    e.preventDefault()
    // this.setState({
    //   searchString: e.target.value
    // })
  }

  handleClick = e => {
    console.log('click!')
    this.props.loadAllQuotes({
      quotes: [
        {
          id: '1',
          text: 'новая очень смешная цитата здесь',
          data: '1 april',
          rating: '0.0'
        }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Цитаты </h1>
        <SearchBox />
        <SmartQuoteList />
        {/* <button onClick={this.handleClick}>новые цитаты</button> */}
        {/* <SocialLinks /> */}
      </div>
    )
  }
}

export default App
