import React from "react";
import type { SocialLinkEntity } from "../data";

const Separator = () => <span className="mx-3">/</span>;

interface SocialLinksProps {
  link: SocialLinkEntity;
  showSeparator?: boolean;
}

export const SocialLink = ({
  link: { url, label },
  showSeparator,
}: SocialLinksProps) => {
  return (
    <a className="last:mr-0 mr-2" href={url}>
      <span className="underlined">{label}</span>
      {showSeparator ? <Separator /> : null}
    </a>
  );
};
