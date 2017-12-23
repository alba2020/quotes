import { LOAD_ALL_QUOTES, SET_SEARCH_STRING } from './constants'

const defaultState = {
  quotes: [],
  searchString: ''
}

const reducer = (state = defaultState, action) => {
  if (action.type === LOAD_ALL_QUOTES) {
    return { ...state, quotes: action.payload }
  } else if (action.type === SET_SEARCH_STRING) {
    return { ...state, searchString: action.payload }
  }
  return state
}

export default reducer
