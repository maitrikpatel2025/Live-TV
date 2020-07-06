import React, { Component }   from "react";
import { connect }            from "react-redux";
import { Link }               from "react-router-dom";

import Modal                  from "../Modal/Modal";
import History                from "../History/History";
import { fetchStream }        from "../../Actions/fetchStream";
import { deleteStream }       from "../../Actions/deleteStream";

class StreamDelete extends Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }


  renderAction() {
      const {id}=this.props.match.params;
    return (
      <React.Fragment>
        <button onClick={()=>this.props.deleteStream(id)} className="ui button negative"> Delete</button>
        <Link to="/" className="ui button">
          cancel
        </Link>
      </React.Fragment>
    );
  }


  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete the stream ?";
    }
    return `Are you sure you want to delete the stream with title: ${this.props.stream.title} ?`;
  }


  render() {
    return (
      <div>
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderAction()}
          onDismiss={() => History.push("/")}
        />
      </div>
    );
  }

}


const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};


export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
