import React from "react";
import Image from "next/image";
import { SocialLinks } from "./components/SocialLinks";
import heroImg from "../../assets/hero.png";
import serjAvatar from "../../assets/serj-avatar.png";
import { AnimatedHeroText } from "./components/AnimatedTitle/animatedHeroText";
import { motion } from "framer-motion";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="md:pl-32 h-full text-white">
      <div className="">
        <div className="md:w-1/2 sm:pt-20 pt-[30vh] flex flex-col">
          <AnimatedHeroText />
          <Link href="/blog">
            <motion.a
              className="max-w-fit bg-accent px-4 py-2 mt-12 cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              Read Articles
            </motion.a>
          </Link>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};
