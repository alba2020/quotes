import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {TQuote} from "../types"

class Quote extends Component {
    render() {
        return <div>
            <p>{this.props.quote.text}</p>
            <p>{this.props.quote.data}</p>
            <p>{this.props.quote.rating}</p>
        </div>
    }
}

Quote.propTypes = {
    quote: TQuote.isRequired
}

export default Quote
