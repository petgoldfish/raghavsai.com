import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

import "./themeControl.css";

interface ThemeProps {
	theme: string;
	toggleTheme: (theme: string) => void;
}

export default function ThemeControl() {
	return (
		<ThemeToggler>
			{({ theme, toggleTheme }: ThemeProps) => (
				<a
					href="#"
					className="theme-control no-invert"
					onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
				>
					<FontAwesomeIcon
						title="Toggle Theme"
						icon={faAdjust}
						width={18}
						rotation={180}
						cursor="pointer"
					/>
				</a>
			)}
		</ThemeToggler>
	);
}
