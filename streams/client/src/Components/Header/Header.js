import React              from "react";
import { NavLink }        from "react-router-dom";
import { Link }           from "react-router-dom";

import GoogleAuth         from "../GoogleAuth/GoogleAuth";
import "./Header.css";


const Header = () => {

  return (
    <div className="Header">
      <div className="ui secondary pointing menu">
        <Link
          to="/"
          className="item"
         
        >
          <button className="ui white button">Live Tv</button>
        </Link>
        <div className="right menu">
          <NavLink
            exact
            to="/streams"
            className="item"
            activeClassName="active"
            activeStyle={{
              borderBottom: "3px solid black",
            }}
          >
            <button className="ui white button">All streams</button>
          </NavLink>
          <Link
            
            to="/"
            className ="item"
          >
            <GoogleAuth />
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Header;