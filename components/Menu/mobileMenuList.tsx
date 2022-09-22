import { useEffect } from 'react';
import {
  MenuItems,
  MenuLink,
  MenuPopover,
  useMenuButtonContext,
} from '@reach/menu-button';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion';

import { NavLink } from './NavLink';
import { LINKS } from './config';

export function MobileMenuList() {
  const { isExpanded } = useMenuButtonContext();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isExpanded) {
      // don't use overflow-hidden, as that toggles the scrollbar and causes layout shift
      document.body.classList.add('fixed');
      document.body.style.height = '100vh';
    } else {
      document.body.classList.remove('fixed');
      document.body.classList.remove('overflow-y-scroll');
      document.body.style.removeProperty('height');
    }
  }, [isExpanded]);

  return (
    <AnimatePresence>
      {isExpanded ? (
        <MenuPopover
          position={(r) => ({
            bottom: 0,
            left: 0,
            right: 0,
            top: `calc(${Number(r?.top) + Number(r?.height)}px + 2rem)`,
          })}
          style={{ display: 'block' }}
          className='bg-gradient-to-b from-dark to-transparent z-50'
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.15,
              ease: 'linear',
            }}
            className='bg-primary dark:border-gray-600 flex flex-col h-full pb-12 overflow-y-scroll border-t border-gray-200'
          >
            <MenuItems className='z-50 px-5 py-6 bg-transparent border-none'>
              {LINKS.map((link) => (
                <MenuLink key={link.to} as={NavLink} href={link.to}>
                  {link.name}
                </MenuLink>
              ))}
            </MenuItems>
          </motion.div>
        </MenuPopover>
      ) : null}
    </AnimatePresence>
  );
}
