import React, { FC } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { BlogPageQuery } from "../../graphql-types";
import { rhythm } from "../utils/typography";

interface BlogProps {
	data: BlogPageQuery;
}

function Blog({ data }: BlogProps) {
	const posts = data.allMdx.edges;

	return (
		<Layout>
			<SEO title="All posts" />
			<div style={{ margin: "20px 0 40px" }}>
				{posts.map(({ node }) => {
					const title = node.frontmatter.title || node.fields.slug;
					return (
						<div key={node.fields.slug}>
							<h3
								style={{
									marginBottom: rhythm(1 / 4),
								}}
							>
								<Link to={`blog${node.fields.slug}`}>{title}</Link>
							</h3>
							<small>{node.frontmatter.date}</small>
							<p
								dangerouslySetInnerHTML={{
									__html: node.frontmatter.description || node.excerpt,
								}}
							/>
						</div>
					);
				})}
			</div>
		</Layout>
	);
}

export default Blog;

export const pageQuery = graphql`
	query blogPage {
		allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						description
					}
				}
			}
		}
	}
`;
