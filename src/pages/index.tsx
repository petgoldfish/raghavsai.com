import React, { FC } from "react";

import Layout from "../components/layout/layout";
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
			<h1>Hello World!</h1>
			<p>
				I'm currently living in New York City, pursuing a Master's in Computer
				Science. Prior to this, I was a Full Stack Software Engineer at
				PowerSchool.
			</p>
			<p>
				When I'm not playing around with Web Development or Programming
				Languages, I'm usually playing video games or doing outdoorsy stuff like
				traveling the world and hiking!
			</p>
		</Layout>
	);
};

export default IndexPage;
