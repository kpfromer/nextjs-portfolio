import React from 'react';
import { Link } from 'gatsby';

export default ({ data }) => (
  <div>
    <div>{/* {data.site.siteMetadata.firstName} {data.site.siteMetadata.lastName} */}</div>
    <Link to="/about">About</Link>
    {/* <Link to="/about">About</Link>
    <Link to="/about">About</Link>
    <Link to="/about">About</Link>
    <Link to="/about">About</Link>
    <Link to="/about">About</Link>
    <Link to="/about">About</Link> */}
  </div>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        firstName
        lastName
      }
    }
  }
`;
