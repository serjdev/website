import React, { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

interface NavLinkProps extends LinkProps {
  children?: ReactNode;
}

const NavLink = React.forwardRef(
  ({ children, href }: NavLinkProps, ref: any) => {
    const router = useRouter();
    const isSelected = href === router.pathname || router.pathname.startsWith(`${href}/`);

    return (
      <li className='px-5 py-2'>
        <Link href={href}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            ref={ref}
            className={clsx(
              'underlined text-bodyText opacity-80 focus:outline-none block whitespace-nowrap text-lg font-medium hover:opacity-100',
              {
                'active text-blue-100': isSelected,
                'text-secondary': !isSelected,
              },
            )}
          >
            {children}
          </a>
        </Link>
      </li>
    );
  },
);

NavLink.displayName = 'NavLink';

export { NavLink };
