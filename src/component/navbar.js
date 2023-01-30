import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";

import "./navbar.css";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  const itemList = [
    {
      text: "Home",
      link: "#home",
    },
    {
      text: "About",
      link: "#about",
    },

    {
      text: "Services",
      link: "#services",
    },
    {
      text: "Contact",
      link: "#contact",
    },
  ];

  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div
          className="logo"
          style={{ fontSize: "18px", fontFamily: "Lato", fontWeight: "600" }}
        >
          ZackExchange
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            {itemList.map((text, index) => (
              <li
                key={index}
                style={{
                  color: showNavbar ? " rgba(9, 9, 139, 0.899)" : "white",
                }}
              >
                <Link
                  className="link"
                  key={index}
                  to={text.link}
                  style={{
                    marginBlockStart: "1em",
                    marginBlockEnd: "1em",
                    color: "white",
                    marginInlineStart: "0px",
                    marginInlineEnd: " 0px",
                    paddingInlineStart: "40px",

                    textDecoration: "none",
                    fontSize: "18px",
                    fontFamily: "Lato",
                    fontWeight: "600",
                  }}
                  onClick={handleShowNavbar}
                  smooth
                >
                  {text.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
