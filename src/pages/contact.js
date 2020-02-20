import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <p>I can be contacted at:</p>
	<p>
	  <code>
	    &lt;khalilalihaji at gmail dot com&gt
	  </code>
	</p>
	<p>
	  <code>
	    &lt;haji dot k at husky dot neu dot edu&gt
	  </code>
	</p>
	<p>
	  <code>
	    &lt;khalil at haji dot dev&gt
	  </code>
	</p>
  <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
