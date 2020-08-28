import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Social from "../components/social/social";

function IndexPage() {
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
					`typescript`,
					`react`,
				]}
			/>
			<h1>Hello, world!</h1>
			<p>
				I live in New York City, and I'm pursuing a Master's in Computer Science at NYU.
				Prior to this, I was a Full Stack Software Engineer at PowerSchool in
				Bangalore, India.
			</p>
			<p>
				When I'm not playing around with Web Development or Programming
				Languages, I'm usually playing video games or doing outdoorsy stuff like
				hiking and traveling the world (well, before the pandemic at least)!
			</p>
			<p>
				Check out my{" "}
				<a href="/resume" target="_blank" rel="noopener noreferrer">
					résumé
				</a>
				!
			</p>
			<h2>Contact Me</h2>
			<p>Email me at hi (at) raghavsai (dot) com.</p>
			<p>
				Find me on: <Social />
			</p>
		</Layout>
	);
}

export default IndexPage;
