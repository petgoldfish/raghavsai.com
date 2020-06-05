import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";

import "../styles/portfolio.css";

function PortfolioPage() {
	return (
		<Layout>
			<SEO title="Portfolio" />
			<article>
				<h2 className="project-type">WEB DEV</h2>
				<section>
					<h3>Chipper</h3>
					<h4>
						<a
							href="https://chipper-web.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Demo
						</a>{" "}
						<span aria-hidden="true">|</span>{" "}
						<a
							href="https://github.com/petgoldfish/chipper-api"
							target="_blank"
							rel="noopener noreferrer"
						>
							Backend Source
						</a>{" "}
						<span aria-hidden="true">|</span>{" "}
						<a
							href="https://github.com/petgoldfish/chipper-web"
							target="_blank"
							rel="noopener noreferrer"
						>
							Frontend Source
						</a>
					</h4>
					<p>
						A super basic twitter clone. Built using React, Apollo Server and
						Client, GraphQL, and PostgreSQL.
					</p>
					<ul>
						<li>
							Written in TypeScript, both on the frontend and the backend.
						</li>
						<li>
							I've used TypeORM and TypeGraphQL to define the database and
							GraphQL entities.
						</li>
						<li>
							Used Formik and Yup to simplify form handling and validation.
						</li>
						<li>
							The backend is hosted on Heroku and and the database is a Heroku
							PostgreSQL service.
						</li>
						<li>Frontend hosted on Netlify.</li>
					</ul>
				</section>
				<hr />
				<section>
					<h3>Just News</h3>
					<h4>
						<a
							href="https://just-news.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Demo
						</a>{" "}
						<span aria-hidden="true">|</span>{" "}
						<a
							href="https://github.com/petgoldfish/just-news"
							target="_blank"
							rel="noopener noreferrer"
						>
							Source
						</a>
					</h4>
					<p>A web app that shows just the news.</p>
					<ul>
						<li>Built using React and TypeScript.</li>
						<li>Hosted on Netlify.</li>
					</ul>
					<p>
						<strong>Note:</strong> Unfortunately since newsapi.org has
						restricted their API to only work on localhost for free tier users,
						the site isn't functional anymore. However, I've decided to leave it
						up as it was only meant to be a frontend showcase. You can build
						from source and add your own API key from newsapi.org to get the
						full experience.
					</p>
				</section>
			</article>
			<hr />
			<article>
				<h2 className="project-type">GAME DEV</h2>
				<p>
					All of my prototypes live on{" "}
					<a
						href="https://petgoldfish.itch.io"
						target="_blank"
						rel="noopener noreferrer"
					>
						my itch.io page
					</a>
					. Feel free to play them!
				</p>
				<p>Unity is the framework of my choice.</p>
				<p>
					Most of my game development experience comes from developing for my
					Game Design class at NYU.
				</p>
			</article>
			<hr />
			<article>
				<h2 className="project-type">OTHERS</h2>
				<section>
					<h3>Chip8 Emulator</h3>
					<h4>
						<a
							href="https://github.com/petgoldfish/Chip8-Emu"
							target="_blank"
							rel="noopener noreferrer"
						>
							Source
						</a>
					</h4>
					<p>
						Built an emulator in C# for the Chip8 Virtual console. It involves
						emulating 35 opcodes, the graphics, and audio.
					</p>
					<p>
						Currently, I’ve implemented all the opcodes and a basic console
						display, with audio and actual graphics still being worked on.
					</p>
				</section>
			</article>
		</Layout>
	);
}

export default PortfolioPage;
