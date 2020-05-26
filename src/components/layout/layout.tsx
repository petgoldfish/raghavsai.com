import React, { FC } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import { LayoutQuery } from "../../../graphql-types";

import "./layout.css";

const Layout: FC = ({ children }) => {
	const { site }: LayoutQuery = useStaticQuery(graphql`
		query layout {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<div className="wrapper">
			<header>
				<h1 className="site-title">
					<Link className="site-title__link" to="/">
						{site.siteMetadata.title}
					</Link>
				</h1>
				<div className="navbar">
					<Link to="/blog/">Blog</Link>
				</div>
			</header>
			<hr />
			<main>{children}</main>
			<footer>© {new Date().getFullYear()} Raghav Sai</footer>
		</div>
	);
};

export default Layout;
