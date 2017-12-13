import React, { Component } from 'react'

import { arrayOf } from 'prop-types'
import {TQuote} from "../types"

import Quote from '../Quote'

const QuoteList = props => (
    <div>{props.quotes.map(q => <Quote key={q.id} quote={q} />)}</div>
)

QuoteList.propTypes = {
    quotes: arrayOf(TQuote) // отрисовываем массив цитат
}

export default QuoteList
