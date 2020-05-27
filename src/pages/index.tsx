import React, { FC } from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { IndexQuery } from "../../graphql-types";

interface IndexProps {
	data: IndexQuery;
}

function IndexPage({ data }: IndexProps) {
	return (
		<Layout>
			<SEO
				title="Home"
				keywords={[
					`raghav sai`,
					`raghav`,
					`sai`,
					`blog`,
					`gatsby`,
					`javascript`,
					`react`,
				]}
			/>
			<h1>Hello World!</h1>
			<p>
				I live in New York City, pursuing a Master's in Computer Science at NYU.
				Before this, I was a Full Stack Software Engineer at PowerSchool in
				Bangalore, India.
			</p>
			<p>
				When I'm not playing around with Web Development or Programming
				Languages, I'm usually playing video games or doing outdoorsy stuff like
				hiking and traveling the world (well, before the pandemic at least)!
			</p>
			<p>
				Check out my{" "}
				<a href={`https://github.com/${data.site.siteMetadata.social.github}`}>
					GitHub
				</a>
				!
			</p>
		</Layout>
	);
}

export default IndexPage;

export const pageQuery = graphql`
	query Index {
		site {
			siteMetadata {
				social {
					github
				}
			}
		}
	}
`;
