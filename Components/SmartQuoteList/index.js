import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import QuoteList from '../QuoteList'
import QuotesWait from '../QuotesWait'

import { loadAllQuotes } from '../../actionCreators'

class SmartQuoteList extends Component {
  componentDidMount() {
    const { loadAllQuotes } = this.props

    axios.get('http://localhost:3001/quotes').then(response => {
      loadAllQuotes(response.data.quotes)
    })
  }

  render() {
    const { allQuotes, searchString } = this.props
    // console.log(this.props)
    if (allQuotes.length > 0) {
      return (
        <QuoteList
          quotes={allQuotes.filter(
            q => q.text.toLowerCase().indexOf(searchString.toLowerCase()) >= 0
          )}
        />
      )
    } else {
      // return <div>no quotes</div>
      return <QuotesWait />
    }
  }
}

const mapStateToProps = state => ({
  allQuotes: state.quotes,
  searchString: state.searchString
})

const mapDispatchToProps = dispatch => ({
  loadAllQuotes: quotes => {
    dispatch(loadAllQuotes(quotes))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SmartQuoteList)
