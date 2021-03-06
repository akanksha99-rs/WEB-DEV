import React, { Component } from "react";
import Feeds from "../Feeds/Feeds";
import HomeProfile from "../HomeProfile/HomeProfile";
import "./Home.css";

class Home extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.setState({
      user : this.props.user
    })
  }

  render() {
    return (
      <div className="home">
        {this.state.user ? (
          <React.Fragment>
            <Feeds user={this.state.user}/>
            <HomeProfile user={this.state.user} />
          </React.Fragment>
        ) : (
          <h1>Loading Data</h1>
        )}
      </div>
    );
  }
}

export default Home;