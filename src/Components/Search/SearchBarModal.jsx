import './SearchBarModal.scss';

import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    isModalOpen: false,
  };

  handleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    return (
      <div
        className={!this.state.isModalOpen ? 'SearchBar' : `SearchBar active`}
      >
        <div className="SearchContainer">
          <div className="Searchleft">
            <form className="SearchForm">
              <input
                type="search"
                placeholder="Search"
                className="searchInput"
              />
              <button className="searchBtn">
                <img
                  src="../images/search.png"
                  alt="search"
                  className="searchImg"
                />
              </button>
            </form>
          </div>
          <div className="SearchRight">
            <button className="closeBtn">
              <img src="../images/close.png" alt="close" className="closeImg" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
