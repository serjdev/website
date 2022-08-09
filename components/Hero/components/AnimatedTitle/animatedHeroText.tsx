import { motion, Variants } from "framer-motion";
import React from "react";
import { AnimatedCharacters } from "./animatedCharacters";
import { TagType } from "./types";

const heroText: Array<{ tagName: TagType; text: string }> = [
  { tagName: "h1", text: "Front End Developer" },
  {
    tagName: "p",
    text: "Hi I am Sergiu, a web developer based in Italy!",
  },
];

export const AnimatedHeroText = () => {
  const variants: Variants = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <motion.div
      className="App"
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <div>
        {heroText.map((item, index) => {
          return <AnimatedCharacters {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
};