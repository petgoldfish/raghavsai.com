import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";
import { BlogPostBySlugQuery } from "../../graphql-types";

interface BlogPostTemplateProps {
	data: BlogPostBySlugQuery;
}

function BlogPostTemplate({ data }: BlogPostTemplateProps) {
	const post = data.mdx;
	return (
		<Layout>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>
			<h1>{post.frontmatter.title}</h1>
			<p
				style={{
					...scale(-1 / 5),
					display: `block`,
					marginBottom: rhythm(1),
					marginTop: rhythm(-1),
				}}
			>
				{post.frontmatter.date}
			</p>
			<MDXRenderer>{post.body}</MDXRenderer>
			<hr
				style={{
					marginBottom: rhythm(1),
				}}
			/>

			<Link to="/blog/">← All Posts</Link>
		</Layout>
	);
}

export default BlogPostTemplate;

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			id
			excerpt(pruneLength: 160)
			body
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				description
			}
		}
	}
`;
