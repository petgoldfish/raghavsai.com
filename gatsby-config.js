module.exports = {
	siteMetadata: {
		title: `Raghav Sai`,
		author: {
			name: `Raghav`,
			fullName: `Raghav Sai`,
		},
		description: `Raghav Sai's personal site-portfolio-blog.`,
		siteUrl: `https://raghavsai.netlify.app/`,
		social: {
			github: `petgoldfish`,
			linkedIn: `graghavsai`,
			twitter: `petgoldfish13`,
		},
	},
	plugins: [
		`gatsby-plugin-netlify-cms`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-graphql-codegen`,
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				stripMetadata: true,
			},
		},
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`,
			},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [".mdx", ".md"],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 768,
						},
					},
					{
						resolve: `gatsby-remark-vscode`,
						options: {
							theme: "Dark+ (default dark)",
						},
					},
					{
						resolve: `gatsby-remark-copy-linked-files`,
					},
					{
						resolve: `gatsby-remark-smartypants`,
					},
					`gatsby-remark-numbered-footnotes`,
				],
			},
		},
		`gatsby-plugin-preact`,
		`gatsby-plugin-dark-mode`,
	],
};
