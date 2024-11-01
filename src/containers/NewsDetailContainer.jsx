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

  handleBack = () => {
    this.props.onBack();
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">Details container</h1>
        {this.state.loading ? (
          <h2 className="loading">Loading...</h2>
        ) : (
          <NewsDetail detail={this.state.detail} onBack={this.handleBack} />
        )}
      </div>
    );
  }
}
