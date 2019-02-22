import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";

import "normalize.css";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>{data.markdownRemark.frontmatter.title}</h1>
  </Layout>
);

export const query = graphql`
  query HomePageQuery {
    markdownRemark(frontmatter: { path: { eq: "/home" } }) {
      frontmatter {
        title
        path
        date
        introduction
      }
    }
  }
`;

export default IndexPage;
