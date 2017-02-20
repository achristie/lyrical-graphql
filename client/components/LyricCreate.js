import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class LyricCreate extends Component {
  state = {
    content: ""
  };

  onSubmit(e) {
    e.preventDefault();
    const { content } = this.state;

    this.props
      .mutate({
        variables: { content, songId: this.props.songId }
      })
      .then(() => this.setState({ content: "" }));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input
          value={this.state.content}
          onChange={e => this.setState({ content: e.target.value })}
        />

      </form>
    );
  }
}

const mutation = gql`
  mutation AddLyric($songId: ID, $content: String) {
    addLyricToSong(songId: $songId, content: $content) {
      id,
      lyrics {
        id,
        likes,
        content
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);
