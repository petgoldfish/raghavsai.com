/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { SeoQuery } from "../../graphql-types";

interface Meta {
	name: string;
	content: string;
}

interface Props {
	lang?: string;
	meta?: Array<Meta>;
	keywords?: Array<string>;
	description?: string;
	title: string;
}

function SEO({
	description = "",
	lang = "en",
	meta = [],
	keywords = [],
	title,
}: Props) {
	const { site }: SeoQuery = useStaticQuery(
		graphql`
			query seo {
				site {
					siteMetadata {
						title
						description
						author {
							fullName
						}
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author.fullName,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			]
				.concat(
					keywords.length > 0
						? {
								name: `keywords`,
								content: keywords.join(`, `),
						  }
						: []
				)
				.concat(meta)}
		/>
	);
}

export default SEO;
