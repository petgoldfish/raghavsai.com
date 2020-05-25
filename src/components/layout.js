import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { rhythm, scale } from "../utils/typography";

function Layout({ children }) {
	const { site } = useStaticQuery(
		graphql`
			query layout {
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	);

	const header = (
		<h1
			style={{
				...scale(1.5),
				marginBottom: rhythm(1.5),
				marginTop: 0,
			}}
		>
			<Link
				style={{
					backgroundImage: `none`,
					color: `inherit`,
				}}
				to="/"
			>
				{site.siteMetadata.title}
			</Link>
			<Link to="/blog/">Blog</Link>
		</h1>
	);
	return (
		<Wrapper>
			<div
				style={{
					marginLeft: `auto`,
					marginRight: `auto`,
					maxWidth: rhythm(25),
					padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
				}}
			>
				<header>{header}</header>
				<main>{children}</main>
			</div>
			<Footer>© {new Date().getFullYear()} Raghav Sai</Footer>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	min-height: 100vh;
	background-color: Ivory;
`;

const Footer = styled.footer`
	text-align: center;
	margin: 24px;
`;

export default Layout;
