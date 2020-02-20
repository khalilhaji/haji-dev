import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../styles/global.css"
import Sidebar from "./sidebar"


const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

    return (
        <div style={{
            display: `flex`,
        }}>
          <Sidebar siteTitle={data.site.siteMetadata.title} />
          <div className="content">
            <div className="inner-content">
              {children}
            </div>
          </div>
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
