import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useStaticQuery, graphql } from "gatsby";
import { SocialQuery } from "../../../graphql-types";

import "./social.css";

export default function Social() {
	const data: SocialQuery = useStaticQuery(graphql`
		query Social {
			site {
				siteMetadata {
					social {
						github
						twitter
						linkedIn
					}
				}
			}
		}
	`);

	const social = data.site.siteMetadata.social;

	return (
		<big>
			<a
				className="social-link no-invert"
				href={`https://www.github.com/${social.github}`}
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={faGithub} width={18} />
			</a>{" "}
			<a
				className="social-link no-invert"
				href={`https://www.linkedin.com/in/${social.linkedIn}`}
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={faLinkedin} width={18} />
			</a>{" "}
			<a
				className="social-link no-invert"
				href={`https://www.twitter.com/${social.twitter}`}
				target="_blank"
				rel="noopener noreferrer"
			>
				<FontAwesomeIcon icon={faTwitter} width={18} />
			</a>
		</big>
	);
}
