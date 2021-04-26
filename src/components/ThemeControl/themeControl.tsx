import React from "react";
import { FaAdjust } from "react-icons/fa";
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
          <FaAdjust
            title="Toggle Theme"
            width={18}
            rotate={180}
            cursor="pointer"
          />
        </a>
      )}
    </ThemeToggler>
  );
}
