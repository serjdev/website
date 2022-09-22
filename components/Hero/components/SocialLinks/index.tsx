import React from 'react';
import { SOCIAL_LINKS } from './data';
import { SocialLink } from './SocialLink';

export function SocialLinks() {
  return (
    <div className='bottom-12 fixed'>
      {SOCIAL_LINKS.map((link, index) => (
        <SocialLink
          key={link.label}
          link={link}
          showSeparator={index !== SOCIAL_LINKS.length - 1}
        />
        ))}
    </div>
  );
}
