module.exports = {
    siteMetadata: {
	title: `Khalil Haji`,
	description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
	author: `Khalil Haji`,
    },
    plugins: [
	`gatsby-plugin-react-helmet`,
	{
	    resolve: `gatsby-source-filesystem`,
	    options: {
		name: `images`,
		path: `${__dirname}/src/images`,
	    },
	},
	{
	    resolve: `gatsby-source-filesystem`,
	    options: {
		name: `documents`,
		path: `${__dirname}/src/documents`,
	    },
	},
	{
	    resolve: `gatsby-source-filesystem`,
	    options: {
		path: `${__dirname}/src/posts`,
                name: `blog-posts`,
	    },
        },
        `gatsby-transformer-remark`,
	`gatsby-transformer-sharp`,
	`gatsby-plugin-sharp`,
	{
	    resolve: `gatsby-plugin-manifest`,
	    options: {
		name: `Khalil Haji`,
		short_name: `Khalil`,
		start_url: `/`,
		background_color: `#c83d39`,
		theme_color: `#c83d39`,
		display: `minimal-ui`,
		icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
	    },
	},
	

	// this (optional) plugin enables Progressive Web App + Offline functionality
	// To learn more, visit: https://gatsby.dev/offline
	// `gatsby-plugin-offline`,
    ],
}
