import React from "react";
import { useLocation } from "react-router-dom";
import { LinkStyled, NavList } from "./Navs.styled";

const links = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/starred",
    text: "Starred",
  },
];

const Navs = () => {
  const location = useLocation();

  return (
    <div>
      <NavList>
        {links.map(({ to, text }) => (
          <li key={to}>
            <LinkStyled
              to={to}
              className={to === location.pathname ? "active" : ""}
            >
              {text}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default Navs;
