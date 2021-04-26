import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
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
        <FaGithub title="Github" width={18} />
      </a>{" "}
      <a
        className="social-link no-invert"
        href={`https://www.linkedin.com/in/${social.linkedIn}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin title="LinkedIn" width={18} />
      </a>{" "}
      <a
        className="social-link no-invert"
        href={`https://www.twitter.com/${social.twitter}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter title="Twitter" width={18} />
      </a>
    </big>
  );
}
