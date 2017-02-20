import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongDetail extends Component {
  render() {
    return (
      <div>
        <h3>Song Detail</h3>
      </div>
    );
  }
}

const query = gql`
  query FetchSong($id: ID!) {
    song(id: $id) {
      title,
      id,
      lyrics {
        id,
        likes,
        content
      }
    }
  }
`;

export default graphql(query)(SongDetail);
