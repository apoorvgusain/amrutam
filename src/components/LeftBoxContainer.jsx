import React from "react";
import BoxHeader from "./BoxHeader";
import AboutMe from "./AboutMe";
import Specialize from "./Specialize";
import Concerns from "./Concerns";
import Experience from "./Experience";
import Reviews from "./Reviews";

const LeftBoxContainer = ({ heading, follow }) => {
  let content;
  if (heading === "A Little About Me") {
    content = <AboutMe />;
  } else if (heading === "I Specialize In") {
    content = <Specialize />;
  } else if (heading === "The Concerns I Treat") {
    content = <Concerns />;
  } else if (heading === "My Work Experience") {
    content = <Experience />;
  } else if (heading === "Featured Reviews (102)") {
    content = <Reviews />;
  }
  return (
    <div className="border-2 border-gray-200 rounded-lg mb-5">
      <BoxHeader heading={heading} follow={follow} />
      {content}
    </div>
  );
};

export default LeftBoxContainer;
