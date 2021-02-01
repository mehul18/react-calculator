import React from "react";
import PropTypes from "prop-types";

const Header = (props) => (
  <nav className="header navbar navbar-dark bg-dark">
    <div className="container">
      <div className="row mx-auto">
        <div className="h3 ml-3 my-auto text-light">{props.title}</div>
      </div>
    </div>
  </nav>
);

Header.defaultProps = {
  title: "Calculator",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
