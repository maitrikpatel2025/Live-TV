import React, { Component }   from "react";
import { connect }            from "react-redux";
import { Link }               from "react-router-dom";

import { fetchStreams }       from "../../Actions/fetchStreams";


class StreamList extends Component {

  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div style={{ textAlign: "left" }}>
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            EDIT
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative"
          >
            DELETE
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item">
          <div className="list-group list-group-flush " key={stream.id}>
            <li className="list-group-item list-group-item-action">
              <h2 className="mb-1">
                <i className="icon camera" />
                <Link to={`/streams/${stream.id}`}>
                {stream.title}
                </Link>
              </h2>
              <p>{stream.description}</p>
              {this.renderAdmin(stream)}
            </li>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new">
            <button className="ui button primary">Create live stream</button>
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="StreamList">
        <div className="ui container">
          <h1>List of all Stream </h1>
          <div className="ui celled list">{this.renderList()}</div>
          {this.renderCreate()}
        </div>
      </div>
    );
  }

}


const mapStateToProps = (state, ownProps) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};


export default connect(mapStateToProps, { fetchStreams })(StreamList);
