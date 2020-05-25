import React, { FC } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage: FC = () => {
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
		</Layout>
	);
};

export default IndexPage;
