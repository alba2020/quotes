import { shape, string } from 'prop-types'

export const TQuote = shape({
    text: string.isRequired,
    data: string.isRequired,
    rating: string.isRequired
})
