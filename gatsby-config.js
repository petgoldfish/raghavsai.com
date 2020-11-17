module.exports = {
	siteMetadata: {
		title: `Raghav Sai`,
		author: {
			name: `Raghav`,
			fullName: `Raghav Sai`,
		},
		description: `Raghav Sai's personal site-portfolio-blog.`,
		siteUrl: `https://www.raghavsai.com/`,
		social: {
			github: `petgoldfish`,
			linkedIn: `raghavsai`,
			twitter: `petg0ldfish`,
		},
	},
	plugins: [
		`gatsby-plugin-netlify-cms`,
		`gatsby-plugin-react-helmet`,
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
		`gatsby-plugin-graphql-codegen`,
		`gatsby-plugin-preact`,
		`gatsby-plugin-dark-mode`,
	],
};
