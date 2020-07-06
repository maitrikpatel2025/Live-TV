import React, { Component }     from "react";
import { connect }              from 'react-redux'

import {signIn, signOut}        from "../../Actions/Googleauth";


class GoogleAuth extends Component {

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "432819285486-co5k8eb537uo7ejeodj8ajp45fc3k9fs.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }


  onAuthChange = (isSignedIn) => {
    if (isSignedIn){
        this.props.signIn(this.auth.currentUser.get().getId());
    }
    else{
        this.props.signOut();
    }

  };


  OnSignInClick = () => {
      this.auth.signIn();
  }
  
  OnSignOutClick = () => {
      this.auth.signOut();
  }

  RenderAuthButton() {
    if(this.props.isSignedIn === null){
        return null;
    }
    else if(this.props.isSignedIn){
        return(<button  onClick={this.OnSignOutClick} className="ui red google button">
        <i className="google icon"/>
        Log Out
        </button>);
    }
    else {
        return(<button onClick={this.OnSignInClick} className="ui red google button">
        <i className="google icon"/>
        Log In
        </button>);
    }
  }


  render() {
    return <div className="GoogleAuth">{this.RenderAuthButton()}</div>;
  }


}


const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
}


export default connect(mapStateToProps,{ signIn, signOut})(GoogleAuth);