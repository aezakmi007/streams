import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streams
      </Link>
      <div className="right menu"></div>
      <Link to="/" className="item">
        All Streams
      </Link>
    </div>
  );
}

export default Header;