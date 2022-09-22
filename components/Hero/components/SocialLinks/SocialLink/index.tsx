import React from 'react';
import type { SocialLinkEntity } from '../data';

function Separator() {
  return <span className='mx-3'>/</span>;
}

interface SocialLinksProps {
  link: SocialLinkEntity;
  showSeparator?: boolean;
}

export function SocialLink({
  link: { label, url },
  showSeparator,
}: SocialLinksProps) {
  return (
    <a className='last:mr-0 mr-2' href={url}>
      <span className='underlined'>{label}</span>
      {showSeparator ? <Separator /> : null}
    </a>
  );
}
