import React, { Component }   from "react";
import { connect }            from "react-redux";

import { createStream }       from "../../Actions/createStream";
import StreamFrom             from "../StreamFrom/StreamFrom";


class StreamCreate extends Component {
 
  onSubmit = (fromValues) => {
    this.props.createStream(fromValues);
  };


  render() {
    return (
      <div style={{ padding: "40px" }} className="StreamCreate">
        <div className="ui container">
          <h1>Create Live Stream </h1>
        </div>
        <StreamFrom onSubmit={this.onSubmit} button="Create"/>
      </div>
    );
  }

}


export default connect(null, { createStream })(StreamCreate);
