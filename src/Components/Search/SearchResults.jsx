import React, { Component } from 'react';
import './SearchResults.scss';
class SearchResults extends Component {
  render() {
    return (
      <div className="SearchResults">
        <section className="results">
          <div className="resultContainer">
            <h1 className="resultsTitle">Search Results</h1>
            <form className="resultForm">
              <input
                type="search"
                placeholder="Search "
                className="resultsInput"
              />
              <button className="resultsBtn">SEARCH</button>
            </form>
          </div>
        </section>
        <section>
          <div>
            <span>PLEASE ENTER A KEYWORD TO PERFORM SEARCH</span>
          </div>
        </section>
      </div>
    );
  }
}

export default SearchResults;
