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
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Raghav Sai`,
				short_name: `Raghav Sai`,
				start_url: `/`,
				background_color: `black`,
				theme_color: `teal`,
				display: `standalone`,
				icon: `static/icon.png`,
				theme_color_in_head: false,
			},
		},
		`gatsby-plugin-preact`,
		`gatsby-plugin-dark-mode`,
		`gatsby-plugin-netlify`,
	],
};
