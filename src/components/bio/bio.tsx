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
import Social from "../social/social";

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
				}
			}
		}
	`);

	const { author } = data.site.siteMetadata;

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
					video games, and traveling the world. Find him on: <Social />
				</p>
			</div>
		</div>
	);
};

export default Bio;
