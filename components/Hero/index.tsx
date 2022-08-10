import React from "react";
import Image from "next/image";
import { SocialLinks } from "./components/SocialLinks";
import heroImg from "../../assets/hero.png";
import serjAvatar from "../../assets/serj-avatar.png";
import { AnimatedHeroText } from "./components/AnimatedTitle/animatedHeroText";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="md:pl-32 h-full text-white">
      <div className="">
        <div className="md:w-1/2 sm:pt-20 pt-[30vh] flex flex-col">
          <AnimatedHeroText />
          <motion.button
            className="max-w-fit bg-accent px-4 py-2 mt-12"
            whileHover={{ scale: 1.1 }}
          >
            Read Articles
          </motion.button>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};
