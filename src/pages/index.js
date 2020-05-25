import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button";

class IndexPage extends React.Component {
	render() {
		return (
			<Layout
				location={this.props.location}
				title={this.props.data.site.siteMetadata.title}
			>
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
				<h1>
					Hey people{" "}
					<span role="img" aria-label="wave emoji">
						👋
					</span>
				</h1>
				<p>Welcome to your new Gatsby website. You are on your home page.</p>
				<p>
					This starter comes out of the box with styled components and Gatsby's
					default starter blog running on Netlify CMS.
				</p>
				<p>Now go build something great!</p>
				<Link to="/blog/">
					<Button marginTop="35px">Go to Blog</Button>
				</Link>
			</Layout>
		);
	}
}

export default IndexPage;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
