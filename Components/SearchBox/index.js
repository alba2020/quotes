import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSearchString } from '../../actionCreators'

class SearchBox extends Component {
  handleChange = event => {
    this.props.setSearchString(event.target.value)
  }

  render() {
    const { searchString } = this.props

    return (
      <div>
        <input
          type="text"
          value={searchString}
          placeholder="Enter your search..."
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchString: state.searchString
})

const mapDispatchToProps = dispatch => ({
  setSearchString: newSearchString => {
    dispatch(setSearchString(newSearchString))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)
