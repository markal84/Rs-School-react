import React, { Component } from 'react';

interface ISearchBarState {
  query: string;
}

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type Clickevent = React.MouseEvent<HTMLElement>;

export default class SearchBar extends Component<ISearchBarState> {
  state: ISearchBarState = JSON.parse(localStorage.getItem('searchData') || '{}') || {
    query: '',
  };

  handleChange = (e: InputEvent) => {
    console.log(e.target.value);
    this.setState({
      query: e.target.value,
    });
  };

  handleSearch = (e: Clickevent) => {
    e.preventDefault();
  };

  componentWillUnmount(): void {
    console.log('unmount');
    localStorage.setItem('searchData', JSON.stringify(this.state));
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="search"
            defaultValue={this.state.query}
            onChange={this.handleChange}
          />
          <button type="button" onClick={this.handleSearch} disabled>
            Search
          </button>
        </div>
      </div>
    );
  }
}
