import React, { Component }     from "react";
import flv                      from "flv.js";
import { connect }              from "react-redux";

import { fetchStream }          from "../../Actions/fetchStream";


class StreamShow extends Component {
  
  
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillMount(){
    }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }

    const { id } = this.props.match.params;
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    const videostyle = {
      width: "100%",
      height: "450px",
    };
    if (!this.props.stream) {
      return <div className="streamShow">Loding</div>;
    }
    const { title, description } = this.props.stream;
    return (
      <div className="streamShow">
        <div className="ui container" style={{ paddingTop: "20px" }}>
          <video ref={this.videoRef} style={videostyle} controls />
        </div>
        <h1>{title}</h1>
        <h4>{description}</h4>
      </div>
    );
  }

}


const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};


export default connect(mapStateToProps, { fetchStream })(StreamShow);
