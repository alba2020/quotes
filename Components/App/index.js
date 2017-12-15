import React, { Component } from 'react'

import QuoteList from '../QuoteList'
import SocialLinks from '../SocialLinks'

import data from '../../data.json'

class App extends Component {
    state = {
        searchString: ''
    }

    changeSearchString = e => {
        e.preventDefault()
        this.setState({ searchString: e.target.value })
    }

    render() {
        return (
            <div className="App">
                <h1>Цитаты</h1>
                <input
                    value={this.state.searchString}
                    onChange={this.changeSearchString}
                />
                <QuoteList
                    quotes={data.quotes.filter(
                        q =>
                            q.text
                                .toLowerCase()
                                .indexOf(
                                    this.state.searchString.toLowerCase()
                                ) >= 0
                    )}
                />
                <SocialLinks />
            </div>
        )
    }
}

export default App
