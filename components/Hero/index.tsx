import React from "react";
import { SocialLinks } from "./components/SocialLinks";

export const Hero = () => {
  return (
    <section className="h-full text-white">
      <div className="flex justify-between">
        <div className="flex flex-col pt-20">
          <h1 className="mb-10 text-4xl font-bold">Front End developer</h1>
          <p>Hi I'm Sergiu, a web developer based in Italy</p>
        </div>
      </div>
      <SocialLinks />
    </section>
  );
};
