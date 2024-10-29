import React, { Component } from "react";
import NewsListContainer from "./containers/NewsListContainer";
import NewsDetailContainer from "./containers/NewsDetailContainer";

export default class App extends Component {
  state = {
    selectedNewsKey: null,
  };

  handleSelectNews = (newsKey) => {
    console.log(newsKey);
    this.setState({ selectedNewsKey: newsKey });
  };

  render() {
    return (
      <div className="App">
        {this.state.selectedNewsKey ? (
          <NewsDetailContainer newsKey={this.state.selectedNewsKey} />
        ) : (
          <NewsListContainer onSelect={this.handleSelectNews} />
        )}
      </div>
    );
  }
}
