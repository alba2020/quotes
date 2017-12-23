import React, { Component } from 'react'

import Quote from '../Quote'

const QuoteList = props => (
    <div>{props.quotes.map(q => <Quote key={q.id} quote={q} />)}</div>
)

export default QuoteList
