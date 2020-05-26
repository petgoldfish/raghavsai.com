import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { BioQuery } from "../../../graphql-types";
import "./bio.css";

const Bio = () => {
	const data: BioQuery = useStaticQuery(graphql`
		query Bio {
			avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
				childImageSharp {
					fixed(width: 50, height: 50) {
						...GatsbyImageSharpFixed
					}
				}
			}
			site {
				siteMetadata {
					author {
						name
						fullName
					}
					social {
						github
						twitter
						linkedIn
					}
				}
			}
		}
	`);

	const { author, social } = data.site.siteMetadata;

	return (
		<div className="bio">
			<Image
				fixed={data.avatar.childImageSharp.fixed}
				alt={author.fullName}
				className="profile-pic"
			/>
			<div className="bio__content">
				<p>
					<strong>{author.name}</strong> loves software development, playing
					video games, and traveling the world. Find him on:{" "}
					<big>
						<a
							className="bio__social no-invert"
							href={`https://www.github.com/${social.github}`}
						>
							<FontAwesomeIcon icon={faGithub} />
						</a>{" "}
						<a
							className="bio__social no-invert"
							href={`https://www.linkedin.com/in/${social.linkedIn}`}
						>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>{" "}
						<a
							className="bio__social no-invert"
							href={`https://www.twitter.com/${social.twitter}`}
						>
							<FontAwesomeIcon icon={faTwitter} />
						</a>
					</big>
				</p>
			</div>
		</div>
	);
};

export default Bio;
