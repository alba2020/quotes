import React, { Component } from "react";

class SearchBox extends Component {
  state = {
    search: ""
  };

  setSearch = event => {
    this.setState({
      search: event.target.value
    });
    this.props.setSearchString(event.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.search}
          placeholder="Enter your search..."
          onChange={this.setSearch}
        />
      </div>
    );
  }
}

export default SearchBox;
