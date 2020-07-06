import React, { Component }   from "react";
import { connect }            from "react-redux";
import  _                     from "lodash";

import { fetchStream }        from "../../Actions/fetchStream";
import { editStream }         from "../../Actions/editStream";
import StreamFrom             from "../StreamFrom/StreamFrom";


class StreamEdit extends Component {
  

  onSubmit = (fromValues) => {
   this.props.editStream(this.props.match.params.id, fromValues)
  };
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    return (
      <div style={{ padding: "40px" }} className="StreamEdit">
        <div className="ui container">
          <h1>Edit your Stream </h1>
        </div>
        <StreamFrom initialValues={_.pick(this.props.stream,'title','description')} onSubmit={this.onSubmit} button="Edit" />
      </div>
    );
  }

}


const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};


export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
