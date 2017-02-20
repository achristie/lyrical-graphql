import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";

class CreateSong extends Component {
  state = {
    title: ""
  };

  onSubmit(e) {
    e.preventDefault();
    const { title } = this.state;
    this.props
      .mutate({
        variables: {
          title
        }
      })
      .then(() => hashHistory.push("/"))
      .catch(() => console.log("error"));
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title: </label>
          <input
            onChange={e => this.setState({ title: e.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id,
      title,
    }
  }
`;

export default graphql(mutation)(CreateSong);
