import React, { Component } from "react";
import NewsList from "../components/NewsList";
import { fetchGame } from "../utils/api";

export default class NewsListContainer extends Component {
  state = {
    news: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchNewsData();
  }

  async fetchNewsData() {
    try {
      const news = await fetchGame();
      console.log(news);
      this.setState({ news, loading: false });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { news, loading } = this.state;

    return (
      <div>
        <h1>News Container</h1>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <NewsList news={news} onSelect={this.props.onSelect} />
        )}
      </div>
    );
  }
}
