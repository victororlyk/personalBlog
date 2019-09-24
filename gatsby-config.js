/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: "Web developer",
		author: "Victor Orlyk",
	},
	plugins: [
		{
			resolve: "gatsby-source-contentful",
			options: {
				spaceId: "bvkoxzhlby0u",
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: "AeJsfagxZy_pT9nUWjatG1A-Ajw1uObjL0OOCfHUGYw",
			},
		},
		"gatsby-plugin-sass",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "src",
				path: `${__dirname}/src/posts/`,
			},
		},
		// we need to use it here before transform
		"gatsby-plugin-sharp",
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					"gatsby-remark-relative-images",
					{
						resolve: "gatsby-remark-images",
						options: {
							maxWidth: 900,
							linkImagesToOriginal: false,
						},
					},
				],
			},
		},

	],
	/* Your site config here */
};
