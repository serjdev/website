import React from "react";
import { SOCIAL_LINKS } from "./data";
import { SocialLink } from "./SocialLink";

export const SocialLinks = () => {
  return (
    <div className="mt-64">
      {SOCIAL_LINKS.map((link, index) => {
        return (
          <SocialLink
            key={link.label}
            link={link}
            showSeparator={index !== SOCIAL_LINKS.length - 1}
          />
        );
      })}
    </div>
  );
};
