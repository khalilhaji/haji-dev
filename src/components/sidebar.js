import { Link, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Image from "./image"
import '../styles/global.css'
import sidebarStyles from "./sidebar.module.css"



const Sidebar = ({ siteTitle }) => {

  const resume = useStaticQuery(graphql`
  query Resume {
    file(relativePath: {eq: "resume.pdf"}) {
      publicURL
    }
  }
  `);
   return (<nav>
      <Link to="/">
        <div className={sidebarStyles.profileWrapper}>
          <Image />
        </div>
      </Link>
      <Link to="/">
	<h1>Khalil Haji
	  <p style={{
	      fontSize: `10px`, 
	  }}>btw, I use arch</p></h1>
      </Link>
      <ul className="fancy">
        <li>
    <Link to="/" activeClassName="active">Home</Link>
        </li>
	<li>
	  <Link to="/contact/" activeClassName="active">Contact</Link>
	</li>
	<li>
	  <a target="_blank" href={resume.file.publicURL}>Resume</a>
	</li>
      </ul>
    </nav>
   )
}

Sidebar.propTypes = {
    siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
    siteTitle: ``,
}

export default Sidebar;
