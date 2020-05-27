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
				I live in New York City, pursuing a Master's in Computer Science at NYU.
				Before this, I was a Full Stack Software Engineer at PowerSchool in
				Bangalore, India.
			</p>
			<p>
				When I'm not playing around with Web Development or Programming
				Languages, I'm usually playing video games or doing outdoorsy stuff like
				hiking and traveling the world (well, before the pandemic at least)!
			</p>
		</Layout>
	);
};

export default IndexPage;
