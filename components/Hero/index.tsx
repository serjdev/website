import React from "react";
import Image from "next/image";
import { SocialLinks } from "./components/SocialLinks";
import heroImg from "../../assets/hero.png";
import { AnimatedHeroText } from "./components/AnimatedTitle/animatedHeroText";

export const Hero = () => {
  return (
    <section className="h-full text-white">
      <div className="md:flex-row flex flex-col-reverse items-center justify-between overflow-hidden">
        <div className="flex flex-col pt-20">
          <AnimatedHeroText />
        </div>
        <div className="mt-12 bg-transparent">
          <Image
            alt="screen with programming elements"
            src={heroImg}
            height={300}
            width={350}
            objectFit="cover"
          />
        </div>
      </div>
      <SocialLinks />
    </section>
  );
};
