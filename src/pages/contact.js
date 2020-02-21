import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Helmet from 'react-helmet'

const SecondPage = () => (
  <Layout>
	<Helmet title="Khalil Haji | Contact" />
    <p>I can be contacted at:</p>
	<p>
	  <code>
	    &lt;khalilalihaji at gmail dot com&gt;
	  </code>
	</p>
	<p>
	  <code>
	    &lt;haji dot k at husky dot neu dot edu&gt;
	  </code>
	</p>
	<p>
	  <code>
	    &lt;khalil at haji dot dev&gt;
	  </code>
	</p>
  </Layout>
)

export default SecondPage
