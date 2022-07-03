import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/starred",
    text: "starred",
  },
];

const Nvas = () => {
  return (
    <div>
      <ul>
        {links.map(({ to, text }) => (
          <li key={to}>
            <Link to={to}>{text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nvas;
