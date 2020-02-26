import { Link, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Image from "./image";
import '../styles/global.css';
import blognavStyles from "./blognav.module.css";



const BlogNav = ({ siteTitle }) => {
    const resume = useStaticQuery(graphql`
  query Other {
    file(relativePath: {eq: "resume.pdf"}) {
      publicURL
    }
  }
  `);
    return (<nav>
              
            </nav>
           );
};

BlogNav.propTypes = {
    siteTitle: PropTypes.string,
};

BlogNav.defaultProps = {
    siteTitle: ``,
};

export default BlogNav;
