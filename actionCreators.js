import { LOAD_ALL_QUOTES, SET_SEARCH_STRING } from './constants'

export function loadAllQuotes(quotes) {
  return {
    type: LOAD_ALL_QUOTES,
    payload: quotes
  }
}

export function setSearchString(newSearchString) {
  return {
    type: SET_SEARCH_STRING,
    payload: newSearchString
  }
}
