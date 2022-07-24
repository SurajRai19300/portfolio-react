import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
// import { BsFileX } from "react-icons/bs";

const TypeWriter = () => {
  return (
    <TypeWriterEffect
      textStyle={{
        fontWeight: 300,
        fontSize: "1.5em",
      }}
      startDelay={4000}
      multiText={[
        "Software Developer",
        "Frontend Developer",
        "Backend Developer",
        "A MERN stack Developer",
      ]}
      multiTextDelay={2000}
      typeSpeed={60}
      multiTextLoop
    />
  );
};

export default TypeWriter;
