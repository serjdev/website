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
      <div className="md:flex-row flex flex-col-reverse items-center justify-between overflow-hidden">
        <div className="md:w-1/2 flex flex-col pt-20">
          <AnimatedHeroText />
          <motion.button
            className="max-w-fit px-4 py-2 border border-white"
            whileHover={{ scale: 1.1 }}
          >
            Read Articles
          </motion.button>
          <SocialLinks />
        </div>
        <div className="md:w-1/2 flex justify-center mt-4">
          <motion.div
            className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full"
            animate={{
              x: [50, -10],
              y: [0, -10],
            }}
            initial={{ x: 0, y: 0 }}
          >
            <Image
              src={serjAvatar}
              width={100}
              height={100}
              layout="responsive"
              alt="Sergiu Grisca photo"
            />
          </motion.div>
          <motion.div
            className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full"
            animate={{
              x: [-50, 10],
              y: [0, 10],
              backgroundColor: ["#fff", "#60f"],
            }}
          >
            <Image
              alt="programming tools"
              src={heroImg}
              width={100}
              height={100}
              layout="responsive"
              className="rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
