import { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          value={this.props.filter}
          onChange={this.props.handleFilterChange}
        />
      </>
    );
  }
}

export default Filter;
