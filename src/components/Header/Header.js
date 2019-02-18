import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import NavigationLink from "../NavigationLink/NavigationLink";

import styles from "./Header.module.css";

const Header = ({ siteTitle, description }) => (
  <header className={styles.header}>
    <div className={styles.siteHeading}>
      <h1 style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <ul className={styles.siteLinks}>
        <NavigationLink link="/about">About</NavigationLink>
        <NavigationLink link="/clinic">Clinic</NavigationLink>
        <NavigationLink link="/teaching">Teaching / Supervision</NavigationLink>
        <NavigationLink link="/homeopathy">Homepathy / Research</NavigationLink>
        <NavigationLink link="/book">Burnett Book</NavigationLink>
        <NavigationLink link="/hahnemann">Hahnemann</NavigationLink>
      </ul>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  description: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
