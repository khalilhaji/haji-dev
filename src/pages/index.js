import React from "react"
// import { Link } from "gatsby"


import  "../styles/global.css"
import Layout from "../components/layout.js"
import Helmet from 'react-helmet'

const IndexPage = () => (
	<Layout>
		<Helmet title="Khalil Haji | Home" />
	<h1>Hi, I'm Khalil</h1>
	<p> I'm a 3rd year <span className="fancy"><a href="https://xkcd.com/2030/" target="_blank">Computer Science</a></span> student at <span className="fancy"><a href="https://northeastern.edu" target="_blank">Northeastern University</a></span>.</p>
	<p>I am interested in web development, programming languages, Linux, and public transportation. On the weekends, catch me riding out of the city on my bike.</p>
	</Layout>
)

export default IndexPage
