import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { BlogPostBySlugQuery } from "../../graphql-types";

import "./blog-post.css";
import Bio from "../components/bio/bio";

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
			<div className="front-matter">
				<h1>{post.frontmatter.title}</h1>
				<p>{post.frontmatter.date}</p>
			</div>
			<MDXRenderer>{post.body}</MDXRenderer>
			<Bio />
			<hr />
			<Link className="invert-link" to="/blog/">
				← All Posts
			</Link>
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
