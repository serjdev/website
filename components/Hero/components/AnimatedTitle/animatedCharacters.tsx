import React from "react";
import { motion, Variants } from "framer-motion";
import { TagType } from "./types";
import clsx from "clsx";

interface AnimatedTitleProps {
  text: string;
  tagName: TagType;
}

export const AnimatedCharacters = ({ text, tagName }: AnimatedTitleProps) => {
  const itemVariants: Variants = {
    hidden: {
      y: "200%",
      color: "#000",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      color: "#FFF",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  const words = text.split(" ").map((item) => item.split(""));

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push("\u00A0");
  });

  // Get the tag name from tagMap
  const Tag = tagName as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={clsx({
        "font-bold text-2xl lg:text-4xl mb-6": tagName === "h1",
        "text-lg lg:text-2xl": tagName === "p",
      })}
    >
      {words.map((_, index) => {
        return (
          <span key={index}>
            {words[index].map((element, i) => {
              return (
                <span className="inline-block overflow-hidden" key={i}>
                  <motion.span className="inline-block" variants={itemVariants}>
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </Tag>
  );
};
