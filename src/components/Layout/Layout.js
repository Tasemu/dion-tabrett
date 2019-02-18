import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "../Header/Header";

import "../../global.css";
import styles from "./Layout.module.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div className={styles.siteWrapper}>
        <Header
          siteTitle={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
        />
        <main className={styles.mainContent}>{children}</main>
        <footer>© {new Date().getFullYear()}, Montague Monro</footer>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
