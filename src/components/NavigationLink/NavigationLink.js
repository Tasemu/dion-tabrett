import React from "react";
import PropTypes from "prop-types";

const NavigationLink = ({ children, link }) => (
  <li>
    <Link to={link}>{children}</Link>
  </li>
);

NavigationLink.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string
};

export default NavigationLink;
