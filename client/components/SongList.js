import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      );
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <ul className="collection">
          {this.props.data.loading ? <li> Loading... </li> : this.renderSongs()}
        </ul>
        <Link to="/song/create" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const query = gql`
  {
    songs {
      id,
      title,
    }
  }
`;

export default graphql(query)(SongList);
