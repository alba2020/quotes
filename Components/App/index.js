import React, { Component } from 'react'

import QuoteList from '../QuoteList'
import SocialLinks from '../SocialLinks'

import axios from 'axios'

import QuotesWait from '../QuotesWait'

import data from '../../data.json'

class App extends Component {
    state = {
        searchString: '',
        allQuotes: []
    }

    changeSearchString = e => {
        e.preventDefault()
        this.setState({ searchString: e.target.value })
    }

    componentDidMount() {
        // console.log('did mount!')
        axios.get('http://localhost:3001/quotes').then(response => {
            this.setState({
                allQuotes: response.data.quotes
            })
        })
    }

    quotes() {
        if (this.state.allQuotes.length > 0) {
            return (
                <QuoteList
                    quotes={this.state.allQuotes.filter(
                        q =>
                            q.text
                                .toLowerCase()
                                .indexOf(
                                    this.state.searchString.toLowerCase()
                                ) >= 0
                    )}
                />
            )
        } else {
            return <QuotesWait />
        }
    }

    render() {
        return (
            <div className="App">
                <h1>Цитаты</h1>
                <input
                    value={this.state.searchString}
                    onChange={this.changeSearchString}
                />
                {this.quotes()}
                {/* <SocialLinks /> */}
            </div>
        )
    }
}

export default App
