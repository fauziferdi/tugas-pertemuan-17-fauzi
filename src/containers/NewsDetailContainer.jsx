import React, { Component } from "react";
import { fetchGameDetail } from "../utils/api";
import NewsDetail from "../components/NewsDetail";

export default class NewsDetailContainer extends Component {
  state = {
    detail: null,
    loading: true,
  };

  componentDidMount() {
    this.fetchDetailData();
  }

  async fetchDetailData() {
    try {
      const data = await fetchGameDetail(this.props.newsKey);
      console.log(this.props.newsKey);
      console.log(data);
      this.setState({
        detail: data.results,
        loading: false,
      });
    } catch (err) {
      console.log(err);
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Details container</h1>
        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <NewsDetail detail={this.state.detail} />
        )}
      </div>
    );
  }
}
