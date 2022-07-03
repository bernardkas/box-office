import React from "react";
import Nvas from "./Navs";
import Title from "./Title";

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Box Office"
        subtitle="Are you looking for a movie or an actor"
      />
      <Nvas />
      {children}
    </div>
  );
};

export default MainPageLayout;
